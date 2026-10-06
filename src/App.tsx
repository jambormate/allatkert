import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './components/Intro'
import List from './components/List'
import Table from './components/Table'
import Card from './components/Card'
import Tudnivalok from './components/Tudnivalok'
import { IntroContent } from './data/IntroContent'
import { ListContent } from './data/ListContent'
import { TableContent } from './data/TableContent'
import { CardContent } from './data/CardContent'
import { TudnivalokListContent } from './data/TudnivalokListContent'

function App() {
    return (
        <>
            <div className="container">
                <Header />

                <Intro
                    header={IntroContent.header}
                    text={IntroContent.text}
                />

                <div className="row mb-2">
                    {ListContent.map((content, index) => (
                        <List
                            key={index}
                            title={content.title}
                            items={content.items}
                            numbered={content.numbered}
                        />
                    ))}
                </div>

                <div className="row mb-1">
                    <Table
                        title={TableContent.title}
                        table_head={TableContent.table_head}
                        table_body={TableContent.table_body}
                    />
                </div>

                <div className="row mb-1">
                    {CardContent.map((content, index) => (
                        <Card
                            key={index}
                            title={content.title}
                            card_title={content.card_title}
                            first={content.first}
                            vesz={content.vesz}
                            kedvenc={content.kedvenc}
                            other={content.other}
                        />
                    ))}
                </div>

                <Tudnivalok
                    title={TudnivalokListContent.title}
                    items={TudnivalokListContent.items}
                />
            </div>

            <Footer />
        </>
    )
}

export default App
