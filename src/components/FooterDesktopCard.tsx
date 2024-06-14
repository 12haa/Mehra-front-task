const FooterDesktopCardModal = ({ selectedTag, setSelectedTag, desc }) => {
  return (
    <div
      className="desktop__modal"
      style={{
        left: `${selectedTag.tags?.x > 400 ? selectedTag.x + 100 : selectedTag.x - 50}px`,
        top: `${selectedTag.y}px`,
      }}
    >
      <div
        style={{
          width: "100%",
        }}
      >
        <span
          className="close"
          style={{
            cursor: "pointer",
          }}
          onClick={() => setSelectedTag(null)}
        >
          &times;
        </span>
      </div>
      <div className="modal__content-main-div">
        <div className="modal__content-left-div">
          <p>{desc || "no desc"}</p>
          <div className="modal__content-footer-div">
            <div className="modal__content-left-rate-div">
              <p
                style={{
                  textDecoration: "line-through",
                }}
              >
                46000
              </p>
              <div>
                <p>4.6</p>
                <img
                  src="src/assets/images/DummyProductRatingStar.png"
                  alt="Dummy Product Rating Star"
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "start",
                paddingTop: "30px",
                fontSize: "17px",
              }}
            >
              <p style={{ color: "#86bc42", gap: "10px" }}>
                460,00&nbsp;
                <span style={{ color: "#878787" }}>تومان</span>
              </p>
            </div>
          </div>
        </div>
        <div className="desktop__modal-right-div">
          <img
            src="/src/assets/images/DummyProductImage.png"
            alt="Dummy Product Image"
          />
        </div>
      </div>
    </div>
  );
};
export default FooterDesktopCardModal;
