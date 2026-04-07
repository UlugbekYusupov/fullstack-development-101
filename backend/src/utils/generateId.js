function generateId(collections){
    if(collections.length ===0){
        return 1;
    }
    return collections[collections.length-1]+1;
}
export default generateId;