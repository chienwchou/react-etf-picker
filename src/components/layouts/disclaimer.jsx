export default function Disclaimer(props) {
    return (
        <section className="flex flex-col py-5 px-10">
            <p>{props.children}</p>
        </section>
    )
}