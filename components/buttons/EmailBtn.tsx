import { HiOutlineEnvelopeOpen } from "react-icons/hi2";
import Button from "@components/ui/Button";

type EmailBtnProps = {
    href: string;
};

export default function EmailBtn({ href }: EmailBtnProps) {
    return (
        <Button
            buttonType="link"
            href={href}
            target="_blank"
            id="email-btn"
            text="email"
            icon={<HiOutlineEnvelopeOpen />}
            className="border-primary bg-primary text-on-primary hover:bg-primary-dark hover:border-primary-dark dark:hover:border-primary-dark dark:hover:bg-primary-dark"
        />
    );
}
