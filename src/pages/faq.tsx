import { FC, ReactNode } from "react";
import Wrapper from "~/components/Wrapper";

const Qna: FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-xl font-bold text-t-pink bold-text">{question}</p>
      <p>{answer}</p>
    </div>
  );
};

const CustomQna = ({
  question,
  children,
}: {
  question: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-xl font-bold text-t-pink bold-text">{question}</p>
      {children}
    </div>
  );
};

const Link: FC<{ to: string; text: string }> = ({ to, text }) => {
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      className="transition-opacity duration-300 text-t-purple opacity-90 hover:opacity-100"
    >
      {text}
    </a>
  );
};

const FAQPage = () => {
  return (
    <Wrapper
      title="anlett10 • faq"
      description="Questions frequently asked to me"
    >
      <h1 className="text-3xl font-bold bold-text pt-14 text-t-purple">FAQ</h1>
      <p className="pt-1 text-slate-200">
        Một số câu hỏi về cá nhân có thể bạn quan tâm!
      </p>

      <div className="pt-10" />

      <div className="flex flex-col gap-6">
        <Qna
          question="Về công việc phát triển phần mềm?"
          answer="Thời gian gần đây suy nghĩ nhiều về cụm từ Code Is Law. Chương trình máy tính là để hiện thực các quy định/quy tắc (Business logic/Law)"
        />

        <CustomQna question="Ngôn ngữ lập trình yêu thích?">
          <p>
            Lý tưởng chương trình được phát triển bằng các ngôn ngữ sau{" "}
            <Link to="https://typescriptlang.org" text="TypeScript" /> and{" "}
            <Link to="https://rust-lang.org/" text="Rust" /> and{" "}
            <Link to="https://move-book.com" text="Move" />.
          </p>
        </CustomQna>

        <CustomQna question="Hiện tại đang làm công việc gì?">
          <p>
            Xây dựng ứng dụng web/mobile theo nhu cầu khách hàng tại{" "}
            <Link to="https://wbookapp.com" text="Kiến Khoa Software" />.
          </p>
        </CustomQna>

        <CustomQna question="Một vài GitHub repos quan tâm nhất?">
          <p>
            <Link to="https://github.com/aptos-labs/" text="Aptos" /> blockchain
            L1 mới phát triển gần đây và{" "}
            <Link
              to="https://github.com/t3-oss/create-t3-app"
              text="T3 Stack"
            />{" "}
            một Web framework cho ngôn ngữ TypeScript.
          </p>
        </CustomQna>
      </div>
    </Wrapper>
  );
};

export default FAQPage;
