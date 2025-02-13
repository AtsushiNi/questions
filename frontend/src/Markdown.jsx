import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Image } from "antd";

const Markdown = ({ content }) => (
  <ReactMarkdown
    rehypePlugins={rehypeRaw}
    components={{
      img: ({ src, alt }) => <Image src={src} alt={alt} width={200} />,
      inline(prop) {
        const { children, ...props } = prop;
        return (
          <pre
            style={{
              display: "inline",
              background: "#f6f8fa",
              padding: "6px",
              marginRight: "5px",
              marginLeft: "5px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              color: "#333",
              overflowX: "auto",
            }}
          >
            <code
              {...props}
              style={{
                fontFamily: "monospace",
              }}
            >
              {children}
            </code>
          </pre>
        );
      },
      code(prop) {
        const { children, ...props } = prop;
        return (
          <pre
            style={{
              background: "#f6f8fa",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              color: "#333",
              overflowX: "auto",
            }}
          >
            <code
              {...props}
              style={{
                fontFamily: "monospace",
              }}
            >
              {children}
            </code>
          </pre>
        );
      },
    }}
  >
    {content}
  </ReactMarkdown>
);

export default Markdown;
