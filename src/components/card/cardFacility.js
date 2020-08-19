import React, {Component} from 'react';

class CardFacility extends Component {
    render() {
        return (
            <div className="facility-container">
                <div className="row no-gutters">
                <div className="col no-gutters">
                    <div className="left-side">
                        <img className="img-facility" src="https://picsum.photos/400/600"/>
                    </div>

                </div>
                <div className="col no-gutters">
                    <div className="right-side">
                        <text>Ruang Rawat Inap</text>
                        <p>Ruang  Rawat  Inap  untuk Penyakit Menular  (Ruang  Isolasi)<br/><br/>
                            Ruang  Rawat Inap untuk  Penyakit  Tidak Menular<br/><br/>
                            Ruang  Rawat Inap untuk Pasien Hewan yang Baru Melahirkan dan bayi yang dilengkapi dengan Inkubator<br/><br/>
                            Ruang  Rawat  Inap  untuk  Hewan Berkutu<br/><br/>
                            Ruang  Rawat Inap Sementara (UGD)<br/><br/>
                            Ruang  Rawat Inap  untuk  Hewan  Anjing  Jenis Besar (VIP)<br/><br/>
                            Ruang Penitipan bagi hewan-hewan yang sehat/Pet Hotel, khusus  untuk  Hewan  Anjing  dan  Kucing<br/><br/>
                            Ruang Rawat Inap Bedah  (Ruang untuk pasien Hewan yang Baru Selesai di Bedah/di Operasi)<br/><br/>
                            Ruang Mayat/Kadaver </p>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default CardFacility;