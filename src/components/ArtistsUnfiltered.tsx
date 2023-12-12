import artistpage1 from '/artistpage1.png';
import artistpage2 from '/artistpage2.png';
import streamingSongs from '/streamingSongs.png';

export default function ArtistsUnfiltered() {
    return (
        <div style={{marginBottom:700}}>
            {/* artist one */}
            <h1 className="posts-titles" style={{marginRight:1000, fontSize:40 }}>Andrew Carrier</h1>
            <hr style={{ border: '1px solid black', backgroundColor:'#D3D3D3', height:1, margin:20, marginRight:500 }} />
            
            <div> 
                <img style={{float:"left",  marginLeft:50, marginRight:20}}   src={artistpage1} height="300" alt="Andrew Carriere Pic"></img>
                <p style={{textAlign:"justify",  marginRight:500, marginBottom:40}}>
                A native of Southern Louisiana, accordionist and singer Andrew Carriere brings a long family tradition into his playing. His father was the legendary Creole fiddler “Bebe” Carriere, his uncle was accordionist Eraste Carriere, and cousins Chubby, Calvin, and Roy Carrier are popular in the zydeco arena. Carriere moved to the Bay Area in the ’60s, learned accordion from the late Danny Poullard, and is featured vocalist on the California Cajun Orchestra’s “Not Lonesome Anymore” CD. He performs regularly with his own band, Andrew Carriere and the Zydeco Cajun Allstars, and is a frequent guest with groups including Creole Belles, CZ & the Bon Vivants, Sauce Piquante and Wild Catahoulas. As the “Great Migration” of the 20th Century spread regional culture to Urban centers around the country, thousands of Creoles and African Americans came to Northern California in search of opportunity. Andrew Carriere is a living example of the means by which that culture endures and spreads. Acting as the elder statesmen of the Cajun/Zydeco scene in Northern California and a mentor to many local musicians, Andrew embodies and perpetuates the flourishing of the genre in the region thousand of miles from its origin
                </p>
                
            </div>
            <hr style={{ border: '1px solid black', backgroundColor:'#D3D3D3', height:1, margin:20, marginRight:500 }} />
            <h2 className="posts-titles" style={{ textAlign: 'left', marginRight: 500 }}>
            FEATURED HEIRLOOM CONTENT- Andrew Carriere <br />& Annie Staninec
            </h2>
            <img style={{marginRight:500}}  src={streamingSongs} width="700" height="400" alt="streamingSongs" /> 
            <hr style={{ border: '1px solid black', backgroundColor:'#D3D3D3', height:1, margin:20, marginRight:500 }} /> 
            
            
            
            {/* artist two */}
            <h1 className="posts-titles" style={{marginRight:1000, fontSize:40 }}>Geno Delafose</h1>
            <hr style={{ border: '1px solid black', backgroundColor:'#D3D3D3', height:1, margin:20, marginRight:500 }} />
            
            <div> 
                <img style={{float:"left",  marginLeft:50, marginRight:20}}   src={artistpage2} height="300" alt="Andrew Carriere Pic"></img>
                <p style={{textAlign:"justify",  marginRight:500, marginBottom:40}}>
                Geno Delafose (born February 6, 1971 in Eunice, Louisiana) is a zydeco accordionist and singer. He is one of the younger generations of the genre who has created the sound known as the nouveau zydeco. His sound is deeply rooted in traditional Creole music with strong influences from Cajun music and also country and western. His father is the famous zydeco accordion player John Delafose.Delafose was born and raised in Eunice, Louisiana. At the age of eight, he joined his father’s band, the Eunice Playboys as a rubboard player and continued to play with the band until his father’s death in 1994. He also appeared on several of the band's recordings. He switched to the accordion in the early 1990s and started to play as an opening act for his father.He has been nominated for a Grammy Award in the “Best Zydeco Or Cajun Music Album” category for his Le Cowboy Creole album (2007).He lives in Duralde, Louisiana near Eunice where he operates his Double D Ranch raising cattle and horses. He also holds fan appreciation parties annually .
                </p>
                
            </div>
            <hr style={{ border: '1px solid black', backgroundColor:'#D3D3D3', height:1, margin:20, marginRight:500 }} />
            <h2 className="posts-titles" style={{ textAlign: 'left', marginRight: 500 }}>
            FEATURED HEIRLOOM CONTENT- Andrew Carriere <br />& Annie Staninec
            </h2>
            <img style={{marginRight:500}}  src={streamingSongs} width="700" height="400" alt="streamingSongs" /> 
            <hr style={{ border: '1px solid black', backgroundColor:'#D3D3D3', height:1, margin:20, marginRight:500 }} /> 


                
                
               
                
               
            
            
            
                
        </div>

    )
};