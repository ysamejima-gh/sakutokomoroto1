import styles from "./index.module.css"

type Props = {
    href: string;
    children: React.ReactNode;
    target?: '_blank' | '_self' | '_parent' | '_top';

};

export default function ButtonLink({ href,target, children}: Props) {
    return (
        <a href={href} target={target} className={styles.button}>{children}</a>
    )
}