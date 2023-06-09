import TagsPrato from 'Components/TagsPrato/TagsPrato';
import style from './Item.module.scss';
import { Prato } from 'types/Types';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

function Item(props: Prato) {
    const { id, title, description, photo } = props;
    const navigate = useNavigate();
    return (
        <div className={style.item} onClick={() => navigate(`/projeto-aluroni/prato/${id}`)}>
            <div className={style.item__imagem}>
                <img src={photo} alt={title} />
            </div>
            <div className={style.item__descricao}>
                <div className={style.item__titulo}>
                    <h2> {title} </h2>
                    <p> {description} </p>
                </div>
                <TagsPrato {...props} />
            </div>
        </div>
    );
}

export default memo(Item);