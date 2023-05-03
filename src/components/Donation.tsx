import { Button, Form, Input, InputNumber, Select, Space } from "antd";

export function Donation() {
  return (
    <Form name="basic" initialValues={{ remember: true }} autoComplete="off">
      <Form.Item
        labelCol={{ span: 4 }}
        label="Donation"
        name="Donation"
        rules={[{ required: true, message: "Please input donation!" }]}
      >
        <Space.Compact style={{ width: "100%" }}>
          <InputNumber
            addonAfter={
              <Select
                defaultValue="$"
                options={[
                  {
                    value: "$",
                    label: "$",
                  },
                  {
                    value: "￥",
                    label: "￥",
                  },
                ]}
              />
            }
          />
        </Space.Compact>
      </Form.Item>

      <Form.Item
        labelCol={{ span: 4 }}
        label="Website"
        name="Website"
        rules={[{ required: true, message: "Please input website!" }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
}
