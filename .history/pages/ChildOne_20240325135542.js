

export default function ChildOne({ parentToChild }) {
    console.log("parent page");

    return(
        <>
            {parentToChild}
        </>
    )
}