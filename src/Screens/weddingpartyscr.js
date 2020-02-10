import React, { Component } from 'react'
import Wpc from '../components/weddingparty'
import madeline from '../assets/madeline.jpeg'

class Weddingparty extends Component {
    render() {
        return (
            <div style={{display: 'grid', gridTemplateColumns: 'auto 10px auto', gridGap: '20px', padding: '10px'}}>
                <div>
                    <Wpc title='MADELINE DIAZ' image={madeline} position="Maid of Honor" bio= "Has been friends with the Bride since they were 3 years old. The two have laughed, cried, played, and grew up together. She's someone the bride can ALWAYS count on." />
                    <Wpc title='GEORGIA KATEHIS' image ={madeline} position="Bridesmaid" bio="Georgia is what fun would look like like if it took human form. Georgia is loved by everyone. She has been a close friend of the bride since she was 11 years old. The two had a blast growing up." />
                    <Wpc title='SABRINA JAKOBSEN' image ={madeline} position="Bridesmaid" bio="Sabrina has been in the brides life since she was born, NO, since before she was born. Jena visited and held Sabrina when she was first born and has grown to be the most fun, loving addition to the family. We love her!" />
                    <Wpc title='LEILA LAGUNA' image ={madeline} position="Bridesmaid" bio="" />
                    <Wpc title='LYLA JAKOBSEN' image ={madeline} position="Bridesmaid" bio="Lyla is the Bride's youngest sister (with a 21 year difference). She is the sweetest, most gentle, and witty young lady." />
                    <Wpc title='ENCARNACION RAMOS' image ={madeline} position="Mother of the Groom" bio="" />
                    <Wpc title='CAROLYN GARDA' image ={madeline} position="Mother of the Bride" bio="Carolyn is the mother of the bride. She acted as both father and mother in her life. No matter what the future holds, the bride knows her mother will be there for her." />
                </div>
                <hr />
                <div>
                    <Wpc title='FRANK REDA' image={madeline} position='Best Man' bio="One of Matts closest friends and the perfect choice for Matt and Jena's big day. Hes a guy who loves to find the perfect time to crack the perfect joke and uses those moments to bring people closer together." />
                    <Wpc title='JON CORCHADO' image ={madeline} position="Groomsman" bio="Jonathan is great friend of both the bride and groom. He was introduced to the couple by the bridesmaid, Georgia, many years ago, and he has enriched their lives since." />
                    <Wpc title='JOHN JAKOBSEN' image ={madeline} position="Groomsman" bio="John may be the Brides younger brother but hes no longer the little brother. He has grown and matured into a young man that we are all very proud of." />
                    <Wpc title='MATT GRIGGS' image ={madeline} position="Groomsman" bio="From the moment Matt and Matt met they hit it off. Skateboarding brought them together and their friendship continued grow from there. No longer just considered a friend but will forever be considered family." />
                    <Wpc title='ERIK JAKOBSEN' image ={madeline} position="Groomsman" bio="Erik is an intelligent and handsome young man. He is shy at first, but give him time and his true witty self comes out to show what a great kid he is. He will be escorting Lyla, who is actually his aunt." />
                    <Wpc title='EDWIN RODRIGUEZ' image ={madeline} position="Father of the Groom" bio="A man who will go to all lengths for his family. Always proud of his son and absolutely loves his soon to be daughter-in-law." />
                    <Wpc title='ROBERT ORTEGA' image ={madeline} position="Step Father of the Bride" bio="The bride has known Bobby for 6 years, and in that time, he has became a big part of her and the grooms lives, as well as Carolyn, Lyla, and John." />
                </div>
            </div>
        )
    }
}

export default Weddingparty
