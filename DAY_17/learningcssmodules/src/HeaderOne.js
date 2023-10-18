import styles from "./headerOne.module.css";

const HeaderOne = () => {
    return(
        <>
        <div className = {styles.wrapper}>
            <h1>Header 1</h1>
        <button className = {styles.headBtn}> HELLO</button>
        </div>
        </>
    )
}

export default HeaderOne;