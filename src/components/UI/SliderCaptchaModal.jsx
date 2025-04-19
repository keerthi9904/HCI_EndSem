// components/UI/SliderCaptchaModal.jsx
import Modal from "./Modal";
import SliderCaptcha from "../../pages/captchas/SliderCaptcha";

export default function SliderCaptchaModal({ open, onClose, onVerified }) {
  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Complete CAPTCHA</h2>
        <p>Slide to verify before proceeding</p>
        <SliderCaptcha onVerified={onVerified} />
      </div>
    </Modal>
  );
}
