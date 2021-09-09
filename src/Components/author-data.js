import './styles/auther-data.css'

function Author(){
    return(
        <div className="author-data">
            <h3 className="author-name">Shahzer Baig</h3>
            <img className="author-image" src="" alt="This is the image of the author"></img>

        {/* This is where the information and Description are written  */}
        <section className="author-data-intro">
            <h2 className="introduction">Introduction</h2>
            <p className="Description"> sudo Description is written here as an Example</p>
        </section>
        </div>
    )
}

export default Author;