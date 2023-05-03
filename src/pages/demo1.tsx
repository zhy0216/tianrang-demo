import { Avatar, Button, Input, Space } from "antd";
import { useState } from "react";

const ZeroPrefix = (
  <Avatar
    size="small"
    style={{ background: "#7265e6", width: 22, height: 22, lineHeight: "20px" }}
  >
    0
  </Avatar>
);
export default function Comment() {
  const [canPost, setCanPost] = useState(false);

  return (
    <Input
      placeholder="Add a comment"
      prefix={ZeroPrefix}
      onChange={(v) => setCanPost(!!v.target.value)}
      suffix={
        <Button type="primary" disabled={!canPost}>
          Post
        </Button>
      }
    />
  );
}
