const BracketMatch = ({ match }: { match: any }) => {
  const percentA =
    match.status === "completed" && match.winner === match.team_a
      ? 100
      : Math.min((match.team_a_streams / match.target_streams) * 100, 100) || 0;
  const percentB =
    match.status === "completed" && match.winner === match.team_b
      ? 100
      : Math.min((match.team_b_streams / match.target_streams) * 100, 100) || 0;

  return (
    <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-4 w-72 shadow-xl hover:border-purple-500/50 transition-colors duration-300 group">
      <div className="flex justify-between items-center mb-3">
        <div className="text-[10px] text-purple-300 font-bold uppercase tracking-widest px-2 py-1 bg-purple-500/20 rounded-full">
          {match.stage}
        </div>
        {match.status === "active" && (
          <div className="flex items-center gap-1 text-[10px] text-red-400 font-bold animate-pulse">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> LIVE
          </div>
        )}
      </div>

      {/*Target Song Info */}
      <div className="flex items-center gap-2 mb-4 text-neutral-300 text-xs">
        <PlayCircle className="w-3 h-3 text-pink-400" />
        <span className="truncate">Target: {match.song}</span>
      </div>

      {/*Team A*/}
      <div
        className={`relative p-2.5 rounded-lg mb-2 overflow-hidden ${match.winner === match.team_a ? "bg-emerald-500/20 border border-emerald-500/50" : "bg-white/5 border border-white/5"}`}
      >
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600/40 to-blue-500/40 -z-10 transition-all duration-1000"
          style={{ width: `${percentA}%` }}
        ></div>
        <div className="flex justify-between items-center z-10 text-sm">
          <span className="font-semibold text-white truncate max-w-[140px] drop-shadow-md">
            {match.team_a}
          </span>
          <span className="text-xs font-medium text-purple-200">
            {Math.floor(percentA)}%
          </span>
        </div>
      </div>

      {/*Team B*/}
      <div
        className={`relative p-2.5 rounded-lg overflow-hidden ${match.winner === match.team_b ? "bg-emerald-500/20 border border-emerald-500/50" : "bg-white/5 border border-white/5"}`}
      >
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-600/40 to-orange-500/40 -z-10 transition-all duration-1000"
          style={{ width: `${percentB}%` }}
        ></div>
        <div className="flex justify-between items-center z-10 text-sm">
          <span className="font-semibold text-white truncate max-w-[140px] drop-shadow-md">
            {match.team_b}
          </span>
          <span className="text-xs font-medium text-pink-200">
            {Math.floor(percentB)}%N
          </span>
        </div>
      </div>

      <div className="mt-3 flex justify-between text-[10px] text-neutral-500 font-medium">
        <span>Goal: {match.target_streams.toLocaleString()} streams</span>
      </div>
    </div>
  );
};

  {selectedMatch && selectedMatch.target_songs && (
                  <div className="space-y-2 bg-white">
                {/* TÍTULO CON EL VS */}
                <div className="text-center">
                  <h2 className="text-lg font-black text-gray-900 tracking-tight">
                    <span className="text-purple-800">TEAM A: </span>
                    {selectedMatch?.team_a}
                    <span className="text-purple-500 mx-2">VS</span>
                    <span className="text-purple-800">TEAM B: </span>
                    {selectedMatch?.team_b}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1 uppercase tracking-widest font-semibold">
                    {selectedMatch?.stage || "Etapa en curso"}
                  </p>
                </div>

                {/* LISTA DE CANCIONES Y STREAMS */}
                <div className="space-x-0.5 gap-1 flex flex-col text-[9px]">
                  {selectedMatch?.target_songs.map(
                    (songName: string, index: number) => (
                      <div key={index} className="">
                        <span className="gap-0.5">
                          <span className="text-purple-500 font-medium">
                            Target song:{" "}
                          </span>
                          {songName}{" "}
                        </span>

                        <span className="">
                          <span className="text-purple-500">Goal: </span>
                          {selectedMatch.target_streams_v2 [
                            index
                          ]?.toLocaleString() || 0}
                        </span>
                      </div>
                    ),
                  )}
                </div>


              </div>
                )}



                
        if (statsData) {
          // Sort by total_members descending

          // Filtramos los albumes existenes 16 y no 18
          const filteredStats = statsData.filter((item : any) =>
            albums.includes(item.album_name),
          );

        
          console.log("Esto es filteredStats", filteredStats)

          const sortedStats = [...filteredStats].sort(
            (a, b) => (b.total_members || 0) - (a.total_members || 0),
          );

          setStats(sortedStats);
          console.log("Que datos recibe sortedStats", sortedStats)


        }

  /*
 const fetchData = useCallback(async () => {
        setIsLoadingMatches(true);
        setIsLoadingStats(true);
        try {
          const [matchesData, statsData] = await Promise.all([
          getBTSMatches(),
          getBTSStats(),
        ]);

        
        if (matchesData && matchesData.length > 0) {
          const mappedMatches = matchesData.map((doc) => ({
            id: doc.$id,
            team_a: doc.team_a,
            team_b: doc.team_b,
            song: doc.target_songs || doc.song || [],
            target_streams: doc.target_streams_v2 || doc.target_streams || [],
            team_a_streams:
              doc.team_a_current_streams ?? (doc.team_a_start_streams || 0),
            team_b_streams:
              doc.team_b_current_streams ?? (doc.team_b_start_streams || 0),
            stage: doc.stage,
            status: doc.status,
            winner: doc.winner,
          }));
          setMatches(mappedMatches);
        }

        if (statsData) {
          // Sort by total_members descending
          const sortedStats = statsData.sort(
            (a, b) => (b.total_members || 0) - (a.total_members || 0),
          );
          setStats(sortedStats);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setIsLoadingMatches(false);
        setIsLoadingStats(false);
      }
    }, []);

    useEffect(() => {
  if (view === 'stats' || view === 'bracket') {
    fetchData();
  }
}, [view, fetchData]); // Ahora fetchData es una depend*/



main.js //API QUE TRACKEA LAS CANCIONES DE LASTFM O LAS TRAE PARA LLENAR NUESTRO PARTIDO


import { Client, Databases, Query } from 'node-appwrite';
import axios from 'axios';

export default async function ({ req, res, log, error }) {
  // Helper para quitar comillas accidentales
  const cleanVar = (val) => val ? val.replace(/^["']|["']$/g, '').trim() : undefined;

  const endpoint = cleanVar(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) || cleanVar(process.env.APPWRITE_ENDPOINT) || "https://sfo.cloud.appwrite.io/v1";
  const projectId = cleanVar(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) || cleanVar(process.env.APPWRITE_PROJECT_ID) || "69e6b56900059b447b48";
  // Appwrite ahora inyecta una llave dinámica automáticamente si marcaste los scopes en la consola
  const apiKey = req.headers['x-appwrite-key'] || cleanVar(process.env.APPWRITE_API_KEY);

  const client = new Client()
    .setEndpoint(endpoint)
    .setProject(projectId)
    .setKey(apiKey);

  const db = new Databases(client);
  
  const DATABASE_ID = cleanVar(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID) || cleanVar(process.env.APPWRITE_DATABASE_ID) || cleanVar(process.env.DATABASE_ID) || "69eaeed7001d3e14a936";
  const MATCHES_COLLECTION = cleanVar(process.env.NEXT_PUBLIC_APPWRITE_BTSMATCHES_COLLECTION_ID) || cleanVar(process.env.APPWRITE_BTSMATCHES_COLLECTION_ID) || "btsmatches";
  const FIFA_COLLECTION = cleanVar(process.env.NEXT_PUBLIC_APPWRITE_BTSFIFA_COLLECTION_ID) || cleanVar(process.env.APPWRITE_BTSFIFA_COLLECTION_ID) || "btsfifa";
  const LASTFM_API_KEY = cleanVar(process.env.LASTFM_API_KEY);

  log("Iniciando escaneo de partidos en vivo...");

  try {
    const activeMatches = await db.listDocuments(DATABASE_ID, MATCHES_COLLECTION, [
      Query.equal("status", "active")
    ]);

    for (const match of activeMatches.documents) {
      log(`Calculando: ${match.team_a} vs ${match.team_b} | Canción: ${match.target_song}`);

      const usersTeamA = await db.listDocuments(DATABASE_ID, FIFA_COLLECTION, [Query.equal("fifateam", match.team_a)]);
      const usersTeamB = await db.listDocuments(DATABASE_ID, FIFA_COLLECTION, [Query.equal("fifateam", match.team_b)]);

      let totalA = 0;
      for (const user of usersTeamA.documents) {
        totalA += await fetchLastFmStreams(user.lastfmuser, match.target_song, LASTFM_API_KEY, log, error);
      }

      let totalB = 0;
      for (const user of usersTeamB.documents) {
        totalB += await fetchLastFmStreams(user.lastfmuser, match.target_song, LASTFM_API_KEY, log, error);
      }

      // Leer los streams iniciales. Cuidado con el plural/singular de tus campos en la base de datos
      let startA = match.team_a_start_streams || 0;
      let startB = match.team_b_start_stream || match.team_b_start_streams || 0;

      let updates = {};

      // Si startA es 0, significa que es la primera vez que se sincroniza el partido. Tomamos la "foto" inicial.
      if (startA === 0 && startB === 0) {
        log(`Primera sincronización para este partido. Guardando snapshot inicial: A=${totalA}, B=${totalB}`);
        updates.team_a_start_streams = totalA;
        // Usa el nombre exacto de la columna en tu BD (asumimos team_b_start_stream por tu config anterior)
        updates.team_b_start_stream = totalB; 
        updates.team_a_current_streams = 0;
        updates.team_b_current_streams = 0;
      } else {
        const progressA = Math.max(0, totalA - startA);
        const progressB = Math.max(0, totalB - startB);
        log(`Progreso real: A=${progressA}, B=${progressB}`);

        updates.team_a_current_streams = progressA;
        updates.team_b_current_streams = progressB;

        if (progressA >= match.target_streams) {
          updates.status = "completed";
          updates.winner = match.team_a;
          log(`¡${match.team_a} ha ganado el partido!`);
        } else if (progressB >= match.target_streams) {
          updates.status = "completed";
          updates.winner = match.team_b;
          log(`¡${match.team_b} ha ganado el partido!`);
        }
      }

      await db.updateDocument(DATABASE_ID, MATCHES_COLLECTION, match.$id, updates);
    }

    return res.json({ success: true, message: "Marcadores actualizados" });
  } catch (err) {
    error("Fallo general: " + err.message);
    return res.json({ success: false, error: err.message });
  }
}

async function fetchLastFmStreams(username, songName, apiKey, log, errorLogger) {
  try {
    const url = `http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${apiKey}&artist=BTS&track=${encodeURIComponent(songName)}&username=${encodeURIComponent(username)}&format=json`;
    const response = await axios.get(url);
    
    if (response.data.error) {
      errorLogger(`Last.fm Error API [${username}]: ${response.data.message}`);
      return 0;
    }

    const playcount = response.data.track?.userplaycount || 0;
    log(`Usuario: ${username} | Canción: ${songName} | Streams totales: ${playcount}`);
    return parseInt(playcount);
  } catch(e) {
    errorLogger(`Error HTTP al consultar Last.fm para ${username}: ${e.message}`);
    return 0;
  }
}


COPIA DEL CODIDO DE MAIN.JS
import { Client, Databases, Query } from 'node-appwrite';
import axios from 'axios';


// Dandole un nombre a la funcion, porque ahora es "anonymous function"
export default async function main({ req, res, log, error }) {
  // Helper para quitar comillas accidentales
  const cleanVar = (val) => val ? val.replace(/^["']|["']$/g, '').trim() : undefined;

  const endpoint = cleanVar(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) || cleanVar(process.env.APPWRITE_ENDPOINT) || "https://sfo.cloud.appwrite.io/v1";
  const projectId = cleanVar(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) || cleanVar(process.env.APPWRITE_PROJECT_ID) || "69e6b56900059b447b48";
  // Appwrite ahora inyecta una llave dinámica automáticamente si marcaste los scopes en la consola
  const apiKey = req.headers['x-appwrite-key'] || cleanVar(process.env.APPWRITE_API_KEY);

  const client = new Client()
    .setEndpoint(endpoint)
    .setProject(projectId)
    .setKey(apiKey);
    
  const db = new Databases(client);
  
  const DATABASE_ID = cleanVar(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID) || cleanVar(process.env.APPWRITE_DATABASE_ID) || cleanVar(process.env.DATABASE_ID) || "69eaeed7001d3e14a936";
  const MATCHES_COLLECTION = cleanVar(process.env.NEXT_PUBLIC_APPWRITE_BTSMATCHES_COLLECTION_ID) || cleanVar(process.env.APPWRITE_BTSMATCHES_COLLECTION_ID) || "btsmatches";
  const FIFA_COLLECTION = cleanVar(process.env.NEXT_PUBLIC_APPWRITE_BTSFIFA_COLLECTION_ID) || cleanVar(process.env.APPWRITE_BTSFIFA_COLLECTION_ID) || "btsfifa";
  const LASTFM_API_KEY = cleanVar(process.env.LASTFM_API_KEY);

  log("Iniciando escaneo de partidos en vivo...");

  try {
    const activeMatches = await db.listDocuments(DATABASE_ID, MATCHES_COLLECTION, [
      Query.equal("status", "active")
    ]);

    for (const match of activeMatches.documents) {
      log(`Calculando: ${match.team_a} vs ${match.team_b} | Canción: ${match.target_songs}`);

      context.log("--- VERSION DE PRUEBA: 15-JUNIO-2026 ---");

      context.log("Contenido de activeMatches:", JSON.stringify(activeMatches));

      context.log("Partido detectado:", match.$id);

      context.log("Campos disponibles en este documento:", Object.keys(match));
      context.log("No se encontraron documentos en activeMatches");

      const usersTeamA = await db.listDocuments(DATABASE_ID, FIFA_COLLECTION, [Query.equal("fifateam", match.team_a)]);
      const usersTeamB = await db.listDocuments(DATABASE_ID, FIFA_COLLECTION, [Query.equal("fifateam", match.team_b)]);


      let totalA = 0;
      for (const user of usersTeamA.documents) {
      if (match.target_songs && Array.isArray(match.target_songs)) {
        for (const song of match.target_songs) {
            log(`Calculando: ${match.team_a} vs ${match.team_b} | Canción específica: ${song}`);
            
            // Aquí es donde llamarías a la API de Last.fm usando "song"
            // await getStreamsForSong(song, ...);
            if (song && song.trim() !== "") {
            totalA += await fetchLastFmStreams(user.lastfmuser, song, LASTFM_API_KEY, log, error);
          }
        }
    } else {
        log("No se encontraron canciones en formato lista para este partido");
    }

  }
/*
      let totalA = 0;
      for (const user of usersTeamA.documents) {
       // totalA += await fetchLastFmStreams(user.lastfmuser, match.target_song, LASTFM_API_KEY, log, error);
        for (let i = 0; i < match.target_songs.length; i++) {
          const song = match.target_songs[i];

          if (song && song.trim() !== "") {
            totalA += await fetchLastFmStreams(user.lastfmuser, song, LASTFM_API_KEY, log, error);
          }
          
        }
      }*/

      let totalB = 0;
      for (const user of usersTeamB.documents) {
        //totalB += await fetchLastFmStreams(user.lastfmuser, match.target_song, LASTFM_API_KEY, log, error);
        for (let i = 0; i < match.target_songs.length; i++) {
          const song = match.target_songs[i];

          if (song && song.trim() !== "") {
            totalB += await fetchLastFmStreams(user.lastfmuser, song, LASTFM_API_KEY, log, error )
          }
        
      }
    }

      // Leer los streams iniciales. Cuidado con el plural/singular de tus campos en la base de datos
      let startA = match.team_a_start_streams || 0;
      let startB = match.team_b_start_stream || match.team_b_start_streams || 0;

      let updates = {};

      // Si startA es 0, significa que es la primera vez que se sincroniza el partido. Tomamos la "foto" inicial.
      if (startA === 0 && startB === 0) {
        log(`Primera sincronización para este partido. Guardando snapshot inicial: A=${totalA}, B=${totalB}`);
        updates.team_a_start_streams = totalA;
        // Usa el nombre exacto de la columna en tu BD (asumimos team_b_start_stream por tu config anterior)
        updates.team_b_start_stream = totalB; 
        updates.team_a_current_streams = 0;
        updates.team_b_current_streams = 0;
      } else {
        const progressA = Math.max(0, totalA - startA);
        const progressB = Math.max(0, totalB - startB);
        log(`Progreso real: A=${progressA}, B=${progressB}`);

        updates.team_a_current_streams = progressA;
        updates.team_b_current_streams = progressB;

        const totalTarget = match.target_streams.reduce((acc, curr) => acc + (curr || 0), 0);

        if (progressA >= totalTarget) {
          updates.status = "completed";
          updates.winner = match.team_a;
          log(`¡${match.team_a} ha ganado el partido!`);
        } else if (progressB >= totalTarget) {
          updates.status = "completed";
          updates.winner = match.team_b;
          log(`¡${match.team_b} ha ganado el partido!`);
        }
      }

      await db.updateDocument(DATABASE_ID, MATCHES_COLLECTION, match.$id, updates);
    }

    return res.json({ success: true, message: "Marcadores actualizados" });
  } catch (err) {
    error("Fallo general: " + err.message);
    return res.json({ success: false, error: err.message });
  }
}

async function fetchLastFmStreams(username, songName, apiKey, log, errorLogger) {
  try {
    const url = `http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${apiKey}&artist=BTS&track=${encodeURIComponent(songName)}&username=${encodeURIComponent(username)}&format=json`;
    const response = await axios.get(url);
    
    if (response.data.error) {
      errorLogger(`Last.fm Error API [${username}]: ${response.data.message}`);
      return 0;
    }

    const playcount = response.data.track?.userplaycount || 0;
    log(`Usuario: ${username} | Canción: ${songName} | Streams totales: ${playcount}`);
    return parseInt(playcount);
  } catch(e) {
    errorLogger(`Error HTTP al consultar Last.fm para ${username}: ${e.message}`);
    return 0;
  }
}
