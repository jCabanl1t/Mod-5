function Course(props){
    const courseStyle = {
        backgroundColor: "pink",
        padding: "1px 20px",
        margin: "30px"
    }

    return(<div style = {courseStyle}>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    </div>)
}

export default Course;