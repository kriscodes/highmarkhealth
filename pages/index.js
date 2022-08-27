import {useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from '../components/Banner'
import Keywords from '../components/Keywords'
import Content from '../components/Content'
import  CsvToHtmlTable  from "../components/csvTable";

export default function Home() {
  const [data, setData] = useState();
  const [file, setFile] = useState();

  const handleFiles = (e) => {
    e.preventDefault();     
    const fileReader = new FileReader();    
    if (file) {
      fileReader.onload = (event) => {
          const csvOutput = event.target.result;
          setData(csvOutput);
          console.log(csvOutput);
      };
      fileReader.readAsText(file);
    }
  };

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Hello!</title>
        <link rel="icon" href="/unnamed.jpeg" />
      </Head>

      <main className={styles.main}>
        <Banner/>
        <Keywords/>
        <Content/>

        <div style={{ maxHeight: "800px", maxWidth: "100%", overflow: "scroll", margin: "2rem 0" }}>
          <form>
            <input
                type={"file"}
                id={"csvFileInput"}
                accept={".csv"}
                onChange={handleOnChange}
            />
            <button
                onClick={(e) => {
                    handleFiles(e);
                }}
            >
                Show Data
            </button>
          </form>

          {data ? 
            (
              <CsvToHtmlTable
              data={data || undefined}
              csvDelimiter=","
              tableClassName="table table-striped"
            />
            ) : 
            <></>
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.kristiancodes.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {'Kristian S.'}
        </a>
      </footer>
    </div>
  )
}
