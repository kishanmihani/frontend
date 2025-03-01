import React  from 'react'
import {Educom,EducomSecond} from '../../../data/Edu/Eduwalut'
import CommenView from '../CommenView/CommenView'
import EventView from '../Events/EventView'
import { Container } from 'react-bootstrap'
export default function Eduwal({ scrollPosition }: { scrollPosition: any }){

    return (
      <React.Fragment>
        {Educom.map((data,i)=>{
           return (<React.Fragment><CommenView scrollPosition={scrollPosition} scrolltrack={data.scrolltrack}  key={i} imgleftside={data.imgleftside} decription={data.decription} figure={data.figure}  imgUp={data.imgUp}  imgback={data.imgback} id={data.id} comheading={data.comheading}></CommenView><Container className={`empty${data.comheading}`} ></Container></React.Fragment>)
        })}
        <EventView scrollPosition={scrollPosition} />
        {EducomSecond.map((data,i)=>{
          return (<React.Fragment><CommenView scrollPosition={scrollPosition} scrolltrack={data.scrolltrack} key={i} imgleftside={data.imgleftside} decription={data.decription} figure={data.figure}  imgUp={data.imgUp}  imgback={data.imgback} id={data.id} comheading={data.comheading}></CommenView><Container className={`empty${data.comheading}`} ></Container></React.Fragment>)
        })}
      </React.Fragment>
    )
}