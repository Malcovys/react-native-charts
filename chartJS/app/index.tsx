import { StyleSheet } from "react-native";
import WebView from "react-native-webview";
import Constants from 'expo-constants';


function getRandomColor (){
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgba(${r}, ${g}, ${b}, 0.6)`;
}

export default function Index() {
  const labels = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
  const data = [0, 0, 0, 0, 110000, 0, 0, 0, 0, 0, 0, 0];

  const chartView = `
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <style>
          body { margin: 0; }
          canvas { width: 100%; height: 100%; }
        </style>
      </head>
      <body>
        <canvas id="chart"></canvas>
        <script>
          const ctx = document.getElementById('chart').getContext('2d');
          const chart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: ${JSON.stringify(labels)},
              datasets: [{
                label: 'Montant 2025',
                data: ${JSON.stringify(data)},
                borderColor: '${getRandomColor()}',
                tension: 0.4,
              }]
            },
            options: {
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: "Montant Total des Factures par Mois"
                }
              },
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Montant (Ar)'
                  },
                  ticks: {
                    callback: function(value) {
                      return value.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, " ");
                    }
                  }
                }
              },
              animation: {
                duration: 1000,
                easing: 'easeOutQuart'
              }
            }
          });
        </script>
      </body>
    </html>
  `;

  return (
    <WebView
      style={styles.container}
      originWhitelist={['*']}
      source={{ html: chartView }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
