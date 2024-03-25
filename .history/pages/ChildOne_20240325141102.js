

export default function ChildOne({ parentToChild }) {
    console.log("parent page");

    return(
        <>
            {parentToChild}
            {/* <p>this is child one</p> */}
        </>
    )
}