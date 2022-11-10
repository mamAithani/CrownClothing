import {DirectoryItemContainer, BodyContainer, BackgroundImage} from './directory-item.styles'
const DirectoryItem = ({category}) => {
    const {id, title, imageUrl} = category; 
    return (        
        <DirectoryItemContainer key={id}>
              <BackgroundImage imageUrl={imageUrl} />
                <BodyContainer>
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </BodyContainer>
        </DirectoryItemContainer>
    ) 
};

export default DirectoryItem;