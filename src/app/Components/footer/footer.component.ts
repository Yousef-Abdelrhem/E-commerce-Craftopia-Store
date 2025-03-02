declare var google: any;
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {
  map!: any;

  ngOnInit() {
    this.loadGoogleMaps();
  }

  ngAfterViewInit() {
    if ((window as any).google && (window as any).google.maps) {
      this.initMap();
    }
  }

  loadGoogleMaps() {
    
    if ((window as any).google && (window as any).google.maps) {
      this.initMap();
      return;
    }

    const script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAqDqxBHO4tGiMUmcYe0JkVxtSbk43QcaM&language=ar";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      this.initMap();
    };
  }

  async initMap() {
    if (!document.getElementById("footer-map")) return; 

    const { Map } = await (window as any).google.maps.importLibrary("maps") as any;
  
    this.map = new Map(document.getElementById("footer-map") as HTMLElement, {
      center: { lat: 30.581131, lng: 32.259529 }, 
      zoom: 12,
    });

    new (window as any).google.maps.Marker({
      position: { lat: 30.581131, lng: 32.259529 },
      map: this.map,
      title: "OurLocation"
    });
  }
}

(window as any).initMap = () => new FooterComponent().initMap();
