import { useQuery } from "@tanstack/react-query";
import { Button, ConfigProvider, Form } from "antd";
import { useLocation, useParams } from "react-router-dom";
import formApis from "~/apis/forms.api";
import { RefetchAll } from "~/components/tools/RefetchAll";
import Field from "./components/Field";
import { useState } from "react";
import submissionApis from "~/apis/submissions.api";

const floatingInputToken = {
  controlHeight: 50,
};

export default function SubmissionPage() {
  const id = useParams()?.id;
  const [form] = Form.useForm();
  const { pathname } = useLocation();
  const isView = pathname.includes("view");
  console.log("isView :", isView);

  const [loading, setLoading] = useState(false);

  const { data } = useQuery({
    queryKey: ["form", id],
    queryFn: () => formApis.getDetail(id!),
  });

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const final = {
        form: id,
        answers: data?.fields.map((_, index) => ({
          fieldId: data?.fields?.[index]?._id,
          value: values[index],
        })),
      };
      await submissionApis.submit(final);
    } catch (error) {}
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-start bg-gray-300 p-10">
      <Form
        layout="vertical"
        className="mx-auto w-[65%] min-w-[650px]"
        onFinish={handleSubmit}
        form={form}
      >
        <RefetchAll />
        <div className="rounded-lg bg-white px-10 pb-8 pt-5 shadow-lg">
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
            {data?.fields.map((field, index: number) => {
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
        </div>
      </Form>

      {isView && (
        <div className="mt-5 min-w-[300px] rounded-lg bg-slate-200 p-2">
          hello nè
        </div>
      )}
    </div>
  );
}
