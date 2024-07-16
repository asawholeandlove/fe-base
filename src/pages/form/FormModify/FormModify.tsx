import { App, Button, Form, Space, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BasicForm from "./components/BasicForm";
import formApis from "~/apis/forms.api";
import FieldsForm from "./components/FieldsForm";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeftOutlined, BackwardFilled } from "@ant-design/icons";

export default function FormModify() {
  const { pathname } = useLocation();
  const id = useParams()?.id;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { message } = App.useApp();
  const [form] = Form.useForm();

  const mode = pathname.includes("add") ? "add" : "edit";

  const { data } = useQuery({
    queryKey: ["form", id],
    queryFn: () => formApis.getDetail(id!),
    enabled: mode === "edit",
  });

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data, form]);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      console.log("values :", values);
      if (mode === "add") {
        await formApis.add({ ...values, fields: [] });
        navigate("/form");
      } else {
        await formApis.edit(id!, values);
      }
      message.success("Thành công");
    } catch (error) {}

    setLoading(false);
  };

  return (
    <Form
      onFinish={handleSubmit}
      className="flex flex-1 flex-col"
      layout="vertical"
      form={form}
    >
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <Space>
          <ArrowLeftOutlined
            className="cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <Form.Item noStyle shouldUpdate>
            {() => {
              return (
                <h1 className="text-xl font-bold">
                  {mode === "add" ? "Tạo mới" : "Chỉnh sửa"} form
                  {form.getFieldValue("title") &&
                    ` #${form.getFieldValue("title")}`}
                </h1>
              );
            }}
          </Form.Item>
        </Space>
        <Button type="primary" htmlType="submit" loading={loading}>
          Lưu dữ liệu
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 rounded-lg bg-white p-4 shadow-md">
        <Tabs
          defaultActiveKey={mode === "add" ? "basic" : "questions"}
          items={[
            {
              key: "basic",
              label: "Thông tin chung",
              children: (
                <div className="m-auto max-w-[800px]">
                  <BasicForm />
                </div>
              ),
            },
            { key: "questions", label: "Câu hỏi", children: <FieldsForm /> },
          ].filter((item) => {
            if (mode === "add") return item.key !== "questions";
            return true;
          })}
        />
      </div>
    </Form>
  );
}
