import { Modal } from "antd";

const Preview = () => {
  return (
    <>
      <Modal
        open={true}
        title="Preview"
        onOk={() => {}}
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
