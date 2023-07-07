// define a type for the item object
interface IItem {
    id: number,
    title: string,
    details: string
}

// function to fetch the item based on the id provided
const fetchItemData = async (itemNumber: number) => {
    const req = await fetch(`http://localhost:3000/api/blog?id=${itemNumber}`);
    const data = await req.json();

    return data.find((i: IItem) => i.id == itemNumber);
}

const ItemPage = async (props: any) => {
    console.log('Props: ', props);

    // get the passed item ID in the dynamic route from the params object
    const { item } = props.params;

    // get the item data
    const itemData = await fetchItemData(item);
    
    // display the data on page
    return (
        <>
            <h2>
                This is the item page 
            </h2>
            {
                itemData && 
                <>
                    <div>
                        {`id: ${itemData.id}`}
                    </div>
                    <div>
                        {`Title: ${itemData.title}`}
                    </div>
                    <div>
                        {`Details: ${itemData.details}`}
                    </div>
                </>
            }
        </>
    )
}

export default ItemPage;