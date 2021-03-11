import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPageFilter">
                <TuneOutlinedIcon />
                <h2>Filter</h2>
            </div>
            <hr />

            <ChannelRow 
            image="https://lh3.googleusercontent.com/fife/ABSRlIpUIR1tPPJfO5_Cj4XNolEFSyizVnkOUy_1CXn3lFyiQ8PkcwkW7KNcm_avCsR9Clz8Mj-uKL0fc0N9rLFZJgSa2ZfpPlKFHjoExB0aUFu1IGmGzTSB4wMSHgFBZ9xegxfArxlakZqZ7nVZ02yBogI9i23SGLjiL4Vipe6QChQTqlehHngI-X4Mzp49JTEQHICk0WJ0UBY4TTdsJgFIC-Wb-LHi5HthCZICRO6AAoot2oLaUHy5aTE0J23q9enOSiOO1sAm_aS1RCX1mQvmmJ-sqHyHr7MBcLp_JTjEtPsx9rhu_FgpIioK0prE-kDFsCc8NbAr_NYSh03nG8gLESqdXdZiC-uOsm1y9gvPACd4BUVgwhtyYpn_AmHmBMz9hKoRXSICauqcACZfmfGMPxkopL9n9-Aj17SkkE_DqV69AeoL8zuGfqmx8EmZxkLkB5mBSMU2jX0vMnQ6BuZfPhx1fBZp3WA_FwfENIPGkKpJgEKJhe2xiS_o2jzClurj6lhNfqfHtL93ElwM25xFRFWCuUjXqbv9e1ERF0PnTNlnG0PaPTDgDv60h_gX-5LgZgCABFuFKV-gEtrG4lvmzDPdeGED16v7of5w1YbytaJdxrdtEiF23KKv2vzRfzkrm-B_Cv-SUpfPWnaazIW-G03t1J63fVpHolrFp7mpEdSvhNJcpFm5WNbxp7cyuJAywuJFu-1BUi40gqQyLBZ53tlD19uzYUe85DtDC0HcxF7GOw=s192-c" 
            channel="Alphonse Bennet"
            verified
            subs="1.2B"
            numOfVids={211}
            desc="MM Styelse Medlem"
            />

            <hr />

            <VideoRow 
            views="782K"
            subs="1.2B" 
            desc="I den här videon går vi igenom den ostoppbara rörelsen Manlig Makt och dess ursprung" 
            timestamp="51 minutes ago" 
            channel="Alphonse Bennet" 
            title="Historien bakom Manlig Makt" 
            image="https://images.creativemarket.com/0.1.0/ps/7821912/1200/800/m1/fpnw/wm0/mm-logo-.jpg?1582665320&s=2b6be7bdbbdd5286f57cc44c4487d30c"
            />
             <VideoRow 
            views="782K"
            subs="1.2B" 
            desc="I den här videon går vi igenom den ostoppbara rörelsen Manlig Makt och dess ursprung" 
            timestamp="51 minutes ago" 
            channel="Alphonse Bennet" 
            title="Historien bakom Manlig Makt" 
            image="https://images.creativemarket.com/0.1.0/ps/7821912/1200/800/m1/fpnw/wm0/mm-logo-.jpg?1582665320&s=2b6be7bdbbdd5286f57cc44c4487d30c"
            />
             <VideoRow 
            views="782K"
            subs="1.2B" 
            desc="I den här videon går vi igenom den ostoppbara rörelsen Manlig Makt och dess ursprung" 
            timestamp="51 minutes ago" 
            channel="Alphonse Bennet" 
            title="Historien bakom Manlig Makt" 
            image="https://images.creativemarket.com/0.1.0/ps/7821912/1200/800/m1/fpnw/wm0/mm-logo-.jpg?1582665320&s=2b6be7bdbbdd5286f57cc44c4487d30c"
            />
             <VideoRow 
            views="782K"
            subs="1.2B" 
            desc="I den här videon går vi igenom den ostoppbara rörelsen Manlig Makt och dess ursprung" 
            timestamp="51 minutes ago" 
            channel="Alphonse Bennet" 
            title="Historien bakom Manlig Makt" 
            image="https://images.creativemarket.com/0.1.0/ps/7821912/1200/800/m1/fpnw/wm0/mm-logo-.jpg?1582665320&s=2b6be7bdbbdd5286f57cc44c4487d30c"
            />
        </div>
    )
}

export default SearchPage
