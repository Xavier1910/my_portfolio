import React from "react";
import "../assets/css/Social.css";

const Social = () => {
  return (
    <div>
      <div class="SocialCardMain">
        <div class="SocialCardUp">
          <a
            href="https://github.com/Xavier1910?"
            target="_blank"
            class="SocialCard1"
            rel="noreferrer"
          >
            <i class="bi bi-github"></i>
          </a>
          <a
            href="https://wa.me/8610206655"
            target="_blank"
            class="SocialCard2"
            rel="noreferrer"
          >
            <i class="bi bi-whatsapp"></i>
          </a>
        </div>
        <div class="SocialCardDown">
          <a
            href="https://www.linkedin.com/in/xavier-fsd/"
            target="_blank"
            rel="noreferrer"
            class="SocialCard3"
          >
            <i class="bi bi-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/xavier_akash_19/"
            target="_blank"
            class="SocialCard4"
            rel="noreferrer"
          >
            <i class="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
