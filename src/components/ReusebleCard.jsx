import React from 'react';
import { Button, Card } from 'antd';
const { Meta } = Card;
const ReusebleCard = ({ image, description, title, imgClass, isBtn }) => (
    <Card className='!rounded-[30px] !py-[20px]' type='inner' hoverable style={{ width: 250 }} cover={<img className={`${imgClass} untouchable`} alt="example" src={image} />}  >
        <Meta className='p-[10px] text-center' title={title} description={description} />
        {isBtn &&
            <Button classNames={"!mt-[10px]"} size='large' type='primary' className='text-[13px] !bg-[rgb(0, 191, 255)] font-bolder'>Узнать больше </Button>
        }
    </Card>
);
export default ReusebleCard;