import { useState } from "react";
import { Modal } from "antd";

const Preview = ({ handleOk }) => {
  const [open] = useState(true);

  return (
    <>
      <Modal
        open={open}
        title="Preview"
        onOk={handleOk}
        width={700}
        footer={(_, { OkBtn }) => (
          <>
            <OkBtn />
          </>
        )}
      >
        <h1>Preview Goes Here</h1>
      </Modal>
    </>
  );
};

export default Preview;
