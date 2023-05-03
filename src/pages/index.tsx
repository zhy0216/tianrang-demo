import { Button, DatePicker, Space, Steps, Divider } from "antd";
import { Comment, Donation } from "../components";

export default function Home() {
  const description = "This is a description.";

  return (
    <>
      <Comment />
      <Divider />

      <Donation />
      <Divider />

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
