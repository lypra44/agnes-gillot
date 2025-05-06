interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  message,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
    }}
  >
    <h1
      style={{
        color: "#2a7d6b",
        borderBottom: "1px solid #eaeaea",
        padding: "10px 0",
      }}
    >
      Nouveau message de contact
    </h1>

    <div style={{ padding: "20px 0" }}>
      <p>
        <strong>Nom:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Téléphone:</strong> {phone}
      </p>

      <div
        style={{
          marginTop: "20px",
          borderTop: "1px solid #eaeaea",
          paddingTop: "20px",
        }}
      >
        <p>
          <strong>Message:</strong>
        </p>
        <p
          style={{
            whiteSpace: "pre-wrap",
            backgroundColor: "#f9f9f9",
            padding: "15px",
            borderRadius: "4px",
          }}
        >
          {message}
        </p>
      </div>
    </div>

    <div
      style={{
        borderTop: "1px solid #eaeaea",
        paddingTop: "15px",
        marginTop: "20px",
        fontSize: "12px",
        color: "#666",
      }}
    >
      <p>
        Ce message a été envoyé depuis le formulaire de contact du site web.
      </p>
    </div>
  </div>
);
