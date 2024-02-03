import React, {useState, useEffect} from 'react'


// const API_key = "AIzaSyD-q58ZlTfke8tsH6LsSpIpTnX0kTcGuJQ";
const API_key = "AIzaSyDIla3-X_K72wxCrwCdAc1Ot8vszIYjHSo"
const videoSearchURL = `https://youtube.googleapis.com/youtube/v3/search?key=${API_key}`

const channelDpURL = `https://youtube.googleapis.com/youtube/v3/channels?key=${API_key}`
	


function Dashboard () {

	const [data, setData] = useState()

	useEffect(() => {
	const videoParams = new URLSearchParams({
		part: 'snippet',
		maxResults: '2'
	})

	console.log(videoParams);

	fetch(`${videoSearchURL}&${videoParams}`).then((res) => res.json()).then((resJson) => setData(resJson.items));
	}, [])

	const getChannelDp = (channelId) => {
		const channelParams = new URLSearchParams({
			part: 'snippet',
			id: `${channelId}`
		})
		return fetch(`${channelDpURL}&${channelParams}`).then((res) => res.json()).then((resJson) => {
			console.log(resJson.items[0].snippet.thumbnails.default.url)
			return resJson.items[0].snippet?.thumbnails.default.url
		});
	}

	return (
		<>
		<div className='grid grid-cols-3 gap-6 px-4 max:grid-cols-2'>
		{
          data?.map((video) => 
            
			<div key={video.id.videoId} className='text-white color flex flex-col gap-3'>
                <div className=''><img src={video.snippet.thumbnails.high.url} alt="" className='h-56'/></div>
                <div className='flex flex-col gap-3'>
                  <div className='object-cover'><img src={getChannelDp(video.snippet.channelId)} alt="" className='w-16 h-10 '/></div>
                  
                  <div>
				  	<div className='text-xl' style={{fontFamily: 'sans-serif',fontSize: '18px'}}>{video.snippet.title}</div>
					<div className='text-sm font-semibold cursor-pointer text-zinc-400 hover:text-white duration-200 ease-in-out'>{video.snippet.channelTitle}</div>
					<div className='flex felx-row gap-3 text-sm cursor-pointer ' style={{color: 'rgb(150, 150, 150)'}}>
						<div>{video.views}</div>
						<div>{video.time}</div>
					</div> 
				  </div>
                </div>
            </div> 
                 )
        }
		</div>
		</>
	)
}

export default Dashboard

// {`${getChannelDp(video.snippet.channelId)}`}