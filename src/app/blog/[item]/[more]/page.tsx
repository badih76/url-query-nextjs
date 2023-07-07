const MorePage = ({ params }: any) => {
    console.log('More params: ', params);

    return (
        <div>Further Dynamic Segment nesting. You passed { params.more }</div>
    )
}

export default MorePage;