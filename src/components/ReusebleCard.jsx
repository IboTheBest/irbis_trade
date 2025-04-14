import React from 'react';
import { Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;
const ReusebleCard = ({ item, isBtn, imgClass }) => {
const navigate = useNavigate()
    return (
        <Card className='!rounded-[30px] !py-[20px]' type='inner' hoverable style={{ width: 250 }} cover={<img className={`${imgClass} untouchable`} alt="example" src={item.image} />}  >
            <Meta className='p-[10px] text-center' title={item.title} description={item.description} />
            {isBtn &&
                <Button onClick={() =>navigate("/contact")} classNames={"!mt-[10px]"} size='large' type='primary' className='text-[13px] !bg-[#00BFFF] font-bolder'>Узнать больше </Button>
            }
        </Card>
    )

};
export default ReusebleCard;