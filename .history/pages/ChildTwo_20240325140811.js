
export default function ChildTwo({ childParent }) {

    return(
        <>
            <button onClick={() => childParent(data)}>Click child to parent</button>
        </>
    )
}