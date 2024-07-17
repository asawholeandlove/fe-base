import { useQuery } from "@tanstack/react-query";
import { Button, ConfigProvider, Form } from "antd";
import { useLocation, useParams } from "react-router-dom";
import formApis from "~/apis/forms.api";
import { RefetchAll } from "~/components/tools/RefetchAll";
import Field from "./components/Field";
import { useEffect, useState } from "react";
import submissionApis from "~/apis/submissions.api";
import axios from "axios";
import { TForm } from "~/types/forms.type";
import ESelect from "~/components/antdBase/ESelect";
import { HomeOutlined } from "@ant-design/icons";
import useFilter from "~/hooks/query/filter/useFilter";
import MDEditor from "@uiw/react-md-editor";

const floatingInputToken = {
  controlHeight: 50,
};

export default function SubmissionPage() {
  const id = useParams()?.id;
  const [form] = Form.useForm();
  const { pathname } = useLocation();
  const isView = pathname.includes("view");
  const [filter] = useFilter();

  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [page, setPage] = useState<"start" | "form" | "end">("form");

  const { data: dataDetail } = useQuery({
    queryKey: ["form", id],
    queryFn: () => formApis.getDetail(id!),
  });

  const { data: submissionList } = useQuery({
    queryKey: ["submissionList", id],
    queryFn: () => submissionApis.findByForm(id!),
    enabled: isView,
  });

  const selectedSubmission = submissionList?.[selectedIndex];

  const data: TForm | undefined = isView
    ? selectedSubmission?.form
    : dataDetail;

  const { startPage, endPage } = data || {};

  useEffect(() => {
    if (startPage?.isShow && !isView) {
      setPage("start");
    }
  }, [isView, startPage]);

  useEffect(() => {
    if (selectedSubmission) {
      form.setFieldsValue(
        selectedSubmission.answers.map((ans: any) => ans.value),
      );
    }
  }, [form, selectedSubmission]);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const ipData = await axios.get("https://api.ipify.org?format=json");

      const client = {
        ip: ipData?.data?.ip,
      };

      const final = {
        form: id,
        answers: data?.fields.map((_, index) => ({
          fieldId: data?.fields?.[index]?._id,
          value: values[index],
        })),
        client,
        extra: filter,
      };
      await submissionApis.submit(final);
      setPage("end");
    } catch (error) {}
    setLoading(false);
  };

  if (data && !data.isPublic) {
    {
      return <span>Form chưa được public!</span>;
    }
  }

  return (
    <div className="flex min-h-screen items-start bg-gray-300 p-10">
      <div className="mx-auto w-[65%] min-w-[650px] rounded-lg bg-white px-10 pb-8 pt-5 shadow-lg">
        {/* Main form */}
        {page === "form" && (
          <Form
            layout="vertical"
            className=""
            onFinish={handleSubmit}
            form={form}
          >
            <RefetchAll />
            <h1 className="mb-10 text-3xl font-bold">{data?.title}</h1>
            <ConfigProvider
              theme={{
                components: {
                  Input: floatingInputToken as any,
                  InputNumber: floatingInputToken as any,
                  Select: floatingInputToken as any,
                  DatePicker: floatingInputToken as any,
                },
              }}
            >
              {data?.fields?.map((field, index: number) => {
                return <Field key={index} data={field} name={index} />;
              })}
            </ConfigProvider>
            {data && !isView && (
              <div className="text-right">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="ml-auto mt-4"
                  loading={loading}
                >
                  Hoàn thành
                </Button>
              </div>
            )}
          </Form>
        )}

        {/* Start page */}

        {page === "start" && startPage?.isShow && (
          <div className="">
            <MDEditor.Markdown source={startPage.content} />
            <div className="text-right">
              <Button
                type="primary"
                onClick={() => setPage("form")}
                className="mt-5"
              >
                Bắt đầu
              </Button>
            </div>
          </div>
        )}

        {/* End page */}
        {page === "end" && endPage?.isShow && (
          <div className="">
            <MDEditor.Markdown source={endPage.content} />
          </div>
        )}

        {/* End page default */}
        {page === "end" && !endPage?.isShow && (
          <div className="py-10">
            <h1 className="text-2xl font-bold">
              Cảm ơn bạn đã hoàn thành bài trắc nghiệm, chúng tôi sẽ liên hệ lại
              bạn sớm.
            </h1>
          </div>
        )}
      </div>

      {isView && (
        <div className="mt-5 min-w-[300px] rounded-lg bg-slate-200 p-2">
          <ESelect
            placeholder="Chọn bài làm"
            className="mb-3"
            value={selectedIndex}
            onChange={setSelectedIndex}
            options={submissionList?.map((item: any, i: number) => {
              return {
                label: new Date(item.createdAt).toLocaleString(),
                value: i,
              };
            })}
          />
          <div className="grid grid-cols-10 gap-2 pl-2">
            <HomeOutlined className="col-span-1" />
            <span className="col-span-9">{selectedSubmission?.client?.ip}</span>
          </div>
        </div>
      )}
    </div>
  );
}
