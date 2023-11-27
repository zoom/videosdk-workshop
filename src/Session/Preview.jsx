import { useState } from "react";
import { Button, Modal } from "antd";
import VideoSettings from "../Components/VideoSettings";
import AudioSettings from "../Components/AudioSettings";

const Preview = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="Camera Preview"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Back
          </Button>,
          <Button key="join" type="primary" onClick={handleOk}>
            Join
          </Button>,
        ]}
      >
        <VideoSettings />
        <AudioSettings />
      </Modal>
    </>
  );
};

export default Preview;
