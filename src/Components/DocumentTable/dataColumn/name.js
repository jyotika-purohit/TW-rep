export default (props) => {
    const{document:{name=''}={}}=props||{};
    return(
        <div>{name}</div>
    )
}