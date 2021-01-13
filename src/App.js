import React from 'react';
import {
    Navbar,
    Nav,
    Jumbotron,
    Card,
    Row,
    Col,
    Container,
    Button
} from 'react-bootstrap';
import './App.css';

function Header (){
    return(
    <Navbar>
        <Navbar.Brand href="#home">
            <img
                alt=""
                src="https://kawankoding.com/assets/frontend/icon.png"
                width="50"
                height="50"
            />
        </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#artikel">Artikel</Nav.Link>
                <Nav.Link href="#video">Video</Nav.Link>
                <Nav.Link href="#kursus">Kursus</Nav.Link>
                <Nav.Link href="#Podcast">Podcast</Nav.Link>
                <Nav.Link href="#Blog_Baru">Blog Baru</Nav.Link>
            </Nav>
            <Nav className="mr-left">
            <Nav.Link href="#Login">Login</Nav.Link>
            <Nav.Link href="#Daftar">Daftar</Nav.Link>
            </Nav>
    </Navbar>
    )
}

function Welcome (){
    return(
        <Jumbotron>
            <Container>
            <div className="coba">
            <h1>Belajar Koding Tanpa Pusing !</h1>
            <p>
            Belajar pemrograman melalui video dan artikel berbahasa Indonesia.
            </p>
            </div>
            </Container>
        </Jumbotron>
    )
}

function Kelas1 (){
    return(
        <div className="kelas">
            <h3>Kelas Terbaru</h3>
        </div>
    )
}

function Kelas (){
    const Cardo = (props) => {
        return(
                <Card style={{ width: '20rem'}}>
                    <Card.Img variant="top" src={props.image} />
                    <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.desc}</Card.Text>
                    </Card.Body>
                </Card>
        );
    }

    return(
        <Row>
            <Col>
                <Cardo
                image="https://kawankoding.com/photos/1/kelas/youtube-laravel-8-livewire.png"
                title="LARAVEL · 21 SEPTEMBER 2020"
                desc="5 Episode"
                />
            </Col>
        <Col>
            <Cardo
            image="https://kawankoding.com/photos/1/kelas/youtube-jetstream.png"
            title="LARAVEL · 21 SEPTEMBER 2020"
            desc="5 Episode"
            />
        </Col>
        <Col>
            <Cardo
            image="https://kawankoding.com/photos/1/kelas/youtube-laravel-8.png"
            title="LARAVEL · 21 SEPTEMBER 2020"
            desc="5 Episode"
            />
        </Col>
        <Col>
            <Cardo
            image="https://kawankoding.com/photos/1/kelas/youtube-laravel-8.png"
            title="LARAVEL · 21 SEPTEMBER 2020"
            desc="5 Episode"
            />
        </Col>
        <Col>
            <Cardo
            image="https://kawankoding.com/photos/1/kelas/youtube-laravel-8-livewire.png"
            title="LARAVEL · 21 SEPTEMBER 2020"
            desc="5 Episode"
            />
        </Col>
        <Col>
            <Cardo
            image="https://kawankoding.com/photos/1/kelas/youtube-laravel-8-livewire.png"
            title="LARAVEL · 21 SEPTEMBER 2020"
            desc="5 Episode"
            />
        </Col>
    </Row>
    )
}

function TombolKelas (){
    return(
        <div className="tombol">
            <Button variant="success">Semuanya</Button>
        </div>
    )
}

function Artikel1 (){
    return(
        <div className="kelas">
            <h3>Artikel Terbaru</h3>
        </div>
    )
}

function TombolArtikel (){
    return(
        <div className="tombol">
            <Button variant="success">Semuanya</Button>
        </div>
    )
}

function Artikel (){
    const Article = (props) => {
        return(
            <Card style={{ width: '20rem'}}>
                    <Card.Img variant="top" src={props.image} />
                    <Card.Body>
                    <Card.Text>{props.subtitle}</Card.Text>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.desc}</Card.Text>
                    </Card.Body>
            </Card>
        )
        }
        return(
            <Row>
                <Col>
                    <Article
                    image="https://kawankoding.com/photos/1/artikel/php-null-coalesce-operator.jpg"
                    subtitle="LARAVEL · 15 MEI 2020"
                    title="Null Coalese Assiggment Operator"
                    desc="Assalamualaikum Warohmatulloh Wabarokatuh, Dalam satu kondisi kita butuh sebuah kode untuk mengecek kondisi bahwa suatu data itu null ata..."
                    />
                </Col>
                <Col>
                    <Article
                    image="https://kawankoding.com/photos/1/kelas/youtube-jetstream.png"
                    subtitle="LARAVEL · 15 MEI 2020"
                    title="Null Coalese Assiggment Operator"
                    desc="Assalamualaikum Warohmatulloh Wabarokatuh, Dalam satu kondisi kita butuh sebuah kode untuk mengecek kondisi bahwa suatu data itu null ata..."
                    />
                </Col>
                <Col>
                    <Article
                    image="https://kawankoding.com/photos/1/kelas/youtube-laravel-8.png"
                    subtitle="LARAVEL · 15 MEI 2020"
                    title="Null Coalese Assiggment Operator"
                    desc="Assalamualaikum Warohmatulloh Wabarokatuh, Dalam satu kondisi kita butuh sebuah kode untuk mengecek kondisi bahwa suatu data itu null ata..."
                    />
                </Col>
                <Col>
                    <Article
                    image="https://kawankoding.com/photos/1/kelas/Frame%201.png"
                    subtitle="LARAVEL · 15 MEI 2020"
                    title="Null Coalese Assiggment Operator"
                    desc="Assalamualaikum Warohmatulloh Wabarokatuh, Dalam satu kondisi kita butuh sebuah kode untuk mengecek kondisi bahwa suatu data itu null ata..."
                    />
                </Col>
                <Col>
                    <Article
                    image="https://kawankoding.com/photos/1/artikel/php-null-coalesce-operator.jpg"
                    subtitle="LARAVEL · 15 MEI 2020"
                    title="Null Coalese Assiggment Operator"
                    desc="Assalamualaikum Warohmatulloh Wabarokatuh, Dalam satu kondisi kita butuh sebuah kode untuk mengecek kondisi bahwa suatu data itu null ata..."
                    />
                </Col>
                <Col>
                    <Article
                    image="https://kawankoding.com/photos/1/artikel/php-null-coalesce-operator.jpg"
                    subtitle="LARAVEL · 15 MEI 2020"
                    title="Null Coalese Assiggment Operator"
                    desc="Assalamualaikum Warohmatulloh Wabarokatuh, Dalam satu kondisi kita butuh sebuah kode untuk mengecek kondisi bahwa suatu data itu null ata..."
                    />
                </Col>
            </Row>
        )
}

function Review (){
    return(
        <div className="text-center">
            <h3>KATA MEREKA</h3>
            <p>Apa yang mereka katakan tentang Kawan Koding</p>
            <Row>
                <Col>
                <img alt="Foto" src="https://kawankoding.com/photos/1/ega.jpg" className="foto"/>
                <h4>Ega Radiegtya</h4>
                <p>"Salah satu tempat untuk cari screencast Laravel terlengkap. Foundernya (Mas Amirul) juga asyik untuk diajak sharing."</p>
                </Col>
                <Col>
                <img alt="Foto" src="https://kawankoding.com/photos/1/agung.jpg" className="foto"/>
                <h4>Agung Setiawan</h4>
                <p>"Tempat paling recommended buat belajar PHP dan Laravel. Penyampaiannya gampang dimengerti dan to the point. 2019 belum belajar ngoding? Buruan!"</p>
                </Col>
                <Col>
                <img alt="Foto" src="https://kawankoding.com/photos/1/ian.jpg" className="foto"/>
                <h4>Ian Mustafa</h4>
                <p>"Kawan Koding mampu memberikan penjelasan terhadap materi Laravel secara jelas, tanpa terburu-buru dan dengan memakai bahasa yang mudah dipahami. Sangat sesuai untuk pemula!."</p>
                </Col>
            </Row>
        </div>
    )
}

function Contact (){
    return(
        <div className="kontak">
            <Row>
                <Col>
                    <h3>Sosial Media</h3>
                    <a href="https://www.flaticon.com/" title="Flaticon">Instagram</a>
                    <a href="https://www.flaticon.com/" title="Flaticon">Youtube</a>
                    <a href="https://www.flaticon.com/" title="Flaticon">Facebook</a>
                    <a href="https://www.flaticon.com/" title="Flaticon">Telegram</a>
                </Col>
                <Col>
                    <h3>Tautan</h3>
                    <p>Artikel</p>
                    <p>Video</p>
                </Col>
                <Col>
                    <h3>Lainnya</h3>
                    <p>Kursus Laravel</p>
                    <p>Podcast</p>
                </Col>
            </Row>
        </div>
    )
}

function Footer (){
    return(
        <div className="footer">
            <p>© Kawan Koding, Sidoarjo, Indonesia</p>
        </div>
    )
}

function App (){
    return(
        <>
            <Header/>
            <Welcome/>
            <Container>
                <Kelas1/>
                <Kelas/>
                <TombolKelas/>
                <Artikel1/>
                <Artikel/>
                <TombolArtikel/>
                <Review/>
                <Contact/>
            </Container>
                <Footer/>
        </>
    )
}

export default App;