import { FC, ReactNode } from "react";
import Wrapper from "~/components/Wrapper";

const Qna: FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-xl font-bold text-purple-300">{question}</p>
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
      <p className="text-xl font-bold text-purple-300">{question}</p>
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
      className="transition-opacity duration-300 text-teal-400 opacity-90 hover:opacity-100"
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
      <h1 className="text-3xl font-bold pt-14 text-purple-300">FAQ</h1>
      <p className="pt-1 text-slate-200">
        Thông tin về công việc và một số quan tâm khác
      </p>

      <div className="pt-10" />

      <div className="flex flex-col gap-6">
        <Qna
          question="Về công việc phát triển phần mềm?"
          answer="Phần mềm là phương tiện quan trọng hỗ trợ công việc, giao tiếp, vận hành thiết bị... Nhìn chung, chương trình máy tính được phát triển nhằm hiện thực các quy tắc/thiết kế được định nghĩa trước đó."
        />

        <Qna
          question="Về tên Kiến Khoa và logo chữ W?"
          answer="W = web, logo nhìn như 2 cuốn sách (= Khoa), Kiến = làm việc để hoàn thành."
        />

        <CustomQna question="Ngôn ngữ lập trình yêu thích?">
          <p>
            Lý tưởng, chương trình sẽ được phát triển bằng các ngôn ngữ sau{" "}
            <Link to="https://typescriptlang.org" text="TypeScript" />,{" "}
            <Link to="https://rust-lang.org/" text="Rust" /> và{" "}
            <Link to="https://move-book.com" text="Move" />.
          </p>
        </CustomQna>

        <CustomQna question="Hiện tại đang làm công việc gì?">
          <p>
            Xây dựng ứng dụng web/mobile theo nhu cầu khách hàng tại{" "}
            <Link to="https://kienkhoa.com" text="Kiến Khoa Software" />.
          </p>
          <p>
            Dịch vụ gia công phần mềm cho các Doanh nghiệp{" "}
            <Link to="https://wbookapp.com" text="wbookapp.com" />.
          </p>
        </CustomQna>

        <CustomQna question="Một vài GitHub repos quan tâm nhất?">
          <p>
            <Link to="https://github.com/aptos-labs/" text="Aptos" /> một
            blockchain L1 mới phát triển gần đây và{" "}
            <Link
              to="https://github.com/t3-oss/create-t3-app"
              text="T3 Stack"
            />{" "}
            một framework để xây các ứng dụng web bằng ngôn ngữ TypeScript.
          </p>
        </CustomQna>
      </div>
    </Wrapper>
  );
};

export default FAQPage;
