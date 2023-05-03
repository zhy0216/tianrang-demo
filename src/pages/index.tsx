import { Button, DatePicker, Space, Steps } from "antd";

export default function Home() {
  const description = "This is a description.";

  return (
    <>
      <Steps
        direction="vertical"
        size="small"
        current={1}
        items={[
          { title: "Finished", description },
          {
            title: "In Progress",
            description,
          },
          {
            title: "Waiting",
            description,
          },
        ]}
      />
    </>
  );
}
