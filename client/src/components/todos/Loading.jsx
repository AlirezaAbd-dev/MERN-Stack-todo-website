import gif from '../../assets/gifs/image_processing20191002-6429-tbqgfv.gif'

const Loading = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center',justifyContent: 'center'}}>
            <img style={{width:'50%'}} src={gif} alt="Loading" />
        </div>
    );
}

export default Loading;
