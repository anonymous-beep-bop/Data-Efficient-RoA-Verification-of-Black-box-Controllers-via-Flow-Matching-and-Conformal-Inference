(function() {
  var N = null;
  var SYSTEMS = {
    pendulum: {
      baselines: [
        {name:'DeepReach',traj:500,f1:.982,sep:3.6,prec:.973,rec:.990,spec:.983},
        {name:'Lyapunov NN',traj:500,f1:.851,sep:0,prec:.893,rec:.813,spec:.939},
        {name:'MORALS',traj:500,f1:.905,sep:24.4,prec:.8963,rec:.9148,spec:.9068},
        {name:'Deterministic Final State Pred.',traj:500,f1:.768,sep:0.6,prec:.9967,rec:.6248,spec:N},
        {name:'Classification',traj:500,f1:.974,sep:0.2,prec:.9514,rec:.9985,spec:N}
      ],
      nonadaptive: [
        {traj:50,f1:.9990,sep:73.76,prec:.9981,rec:1.0000,spec:.9995},
        {traj:100,f1:.9341,sep:51.62,prec:.9883,rec:.8855,spec:.9966},
        {traj:150,f1:.9833,sep:18.72,prec:.9854,rec:.9812,spec:.9913},
        {traj:200,f1:.9830,sep:11.57,prec:.9915,rec:.9746,spec:.9950},
        {traj:250,f1:.9932,sep:9.88,prec:.9945,rec:.9920,spec:.9965},
        {traj:300,f1:.9824,sep:6.34,prec:.9813,rec:.9835,spec:.9886},
        {traj:350,f1:.9801,sep:5.54,prec:.9874,rec:.9730,spec:.9922},
        {traj:400,f1:.9826,sep:7.70,prec:.9842,rec:.9810,spec:.9903},
        {traj:450,f1:.9896,sep:7.11,prec:.9851,rec:.9941,spec:.9900},
        {traj:500,f1:.9932,sep:8.01,prec:.9913,rec:.9952,spec:.9947}
      ],
      adaptive: [
        {traj:50,f1:.9990,sep:73.76,prec:.9981,rec:1.0000,spec:.9995},
        {traj:100,f1:.9492,sep:30.68,prec:.9932,rec:.9089,spec:.9975},
        {traj:150,f1:.9717,sep:20.55,prec:.9930,rec:.9513,spec:.9957},
        {traj:200,f1:.9742,sep:11.74,prec:.9969,rec:.9526,spec:.9985},
        {traj:250,f1:.9945,sep:9.54,prec:.9984,rec:.9907,spec:.9990},
        {traj:300,f1:.9793,sep:1.77,prec:.9993,rec:.9601,spec:.9996},
        {traj:350,f1:.9867,sep:3.92,prec:.9959,rec:.9777,spec:.9974},
        {traj:400,f1:.9726,sep:2.04,prec:1.0000,rec:.9466,spec:1.0000},
        {traj:450,f1:.9857,sep:3.07,prec:.9992,rec:.9726,spec:.9995},
        {traj:500,f1:.9741,sep:5.95,prec:1.0000,rec:.9495,spec:1.0000}
      ]
    },
    cartpole: {
      baselines: [
        {name:'DeepReach',traj:1000,f1:.901,sep:16.7,prec:.859,rec:.947,spec:.987},
        {name:'Lyapunov NN',traj:1000,f1:.978,sep:71.9,prec:.972,rec:.984,spec:.987},
        {name:'MORALS',traj:1000,f1:.699,sep:17.9,prec:.5370,rec:.9993,spec:.7614},
        {name:'Deterministic Final State Pred.',traj:1000,f1:.346,sep:1.0,prec:.9991,rec:.2090,spec:N},
        {name:'Classification',traj:1000,f1:.946,sep:0.2,prec:.9668,rec:.9260,spec:N}
      ],
      nonadaptive: [
        {traj:300,f1:.9568,sep:35.71,prec:.9389,rec:.9754,spec:.9885},
        {traj:350,f1:.9820,sep:20.70,prec:.9784,rec:.9856,spec:.9972},
        {traj:400,f1:.9784,sep:16.82,prec:.9708,rec:.9862,spec:.9957},
        {traj:450,f1:.9732,sep:15.02,prec:.9774,rec:.9689,spec:.9971},
        {traj:500,f1:.9773,sep:14.80,prec:.9804,rec:.9742,spec:.9977},
        {traj:550,f1:.9857,sep:17.09,prec:.9845,rec:.9869,spec:.9980},
        {traj:600,f1:.9874,sep:16.15,prec:.9858,rec:.9889,spec:.9979},
        {traj:650,f1:.9801,sep:13.65,prec:.9729,rec:.9873,spec:.9960},
        {traj:700,f1:.9843,sep:13.47,prec:.9887,rec:.9799,spec:.9985},
        {traj:750,f1:.9824,sep:8.43,prec:.9719,rec:.9931,spec:.9948},
        {traj:800,f1:.9815,sep:13.13,prec:.9734,rec:.9897,spec:.9959},
        {traj:850,f1:.9862,sep:12.12,prec:.9930,rec:.9794,spec:.9991},
        {traj:900,f1:.9905,sep:9.61,prec:.9918,rec:.9893,spec:.9987},
        {traj:950,f1:.9874,sep:8.38,prec:.9893,rec:.9856,spec:.9982},
        {traj:1000,f1:.9839,sep:7.59,prec:.9915,rec:.9764,spec:.9986}
      ],
      adaptive: [
        {traj:300,f1:.9568,sep:35.71,prec:.9389,rec:.9754,spec:.9885},
        {traj:350,f1:.9849,sep:20.86,prec:.9854,rec:.9844,spec:.9981},
        {traj:400,f1:.9871,sep:13.11,prec:.9817,rec:.9925,spec:.9971},
        {traj:450,f1:.9720,sep:10.76,prec:.9924,rec:.9524,spec:.9990},
        {traj:500,f1:.9687,sep:8.97,prec:.9960,rec:.9429,spec:.9995},
        {traj:550,f1:.9901,sep:10.24,prec:.9930,rec:.9872,spec:.9989},
        {traj:600,f1:.9891,sep:6.92,prec:.9929,rec:.9853,spec:.9987},
        {traj:650,f1:.9904,sep:8.12,prec:.9962,rec:.9846,spec:.9994},
        {traj:700,f1:.9923,sep:4.87,prec:.9965,rec:.9881,spec:.9993},
        {traj:750,f1:.9901,sep:3.48,prec:.9968,rec:.9835,spec:.9994},
        {traj:800,f1:.9902,sep:2.63,prec:.9966,rec:.9839,spec:.9993},
        {traj:850,f1:.9879,sep:1.61,prec:.9911,rec:.9847,spec:.9981},
        {traj:900,f1:.9871,sep:1.37,prec:.9960,rec:.9784,spec:.9992},
        {traj:950,f1:.9887,sep:1.26,prec:.9963,rec:.9811,spec:.9992},
        {traj:1000,f1:.9896,sep:0.99,prec:.9958,rec:.9836,spec:.9991}
      ]
    },
    quad2d: {
      baselines: [
        {name:'DeepReach',traj:12000,f1:.353,sep:0,prec:.235,rec:.706,spec:.800},
        {name:'Lyapunov NN',traj:12000,f1:.571,sep:97.5,prec:.435,rec:.831,spec:.987},
        {name:'MORALS',traj:12000,f1:.292,sep:32.4,prec:.1782,rec:.8126,spec:.6204},
        {name:'Deterministic Final State Pred.',traj:12000,f1:.067,sep:1.0,prec:.9733,rec:.0344,spec:N},
        {name:'Classification',traj:12000,f1:.777,sep:0.5,prec:.8956,rec:.6856,spec:N}
      ],
      nonadaptive: [
        {traj:3000,f1:.6608,sep:32.05,prec:.9617,rec:.5034,spec:.9994},
        {traj:4000,f1:.4782,sep:22.92,prec:.9412,rec:.3206,spec:.9994},
        {traj:5000,f1:.6285,sep:15.86,prec:.9242,rec:.4761,spec:.9983},
        {traj:6000,f1:.7506,sep:18.78,prec:.9224,rec:.6327,spec:.9979},
        {traj:7000,f1:.7188,sep:13.19,prec:.9111,rec:.5935,spec:.9975},
        {traj:8000,f1:.8231,sep:15.12,prec:.9271,rec:.7401,spec:.9972},
        {traj:9000,f1:.8105,sep:14.95,prec:.9380,rec:.7135,spec:.9979},
        {traj:10000,f1:.8694,sep:18.60,prec:.9378,rec:.8103,spec:.9973},
        {traj:11000,f1:.8849,sep:19.05,prec:.9489,rec:.8289,spec:.9978},
        {traj:12000,f1:.8547,sep:13.21,prec:.9542,rec:.7739,spec:.9982}
      ],
      adaptive: [
        {traj:3000,f1:.6608,sep:32.05,prec:.9617,rec:.5034,spec:.9994},
        {traj:4000,f1:.5931,sep:15.62,prec:.9475,rec:.4316,spec:.9993},
        {traj:5000,f1:.7104,sep:10.45,prec:.9672,rec:.5614,spec:.9993},
        {traj:6000,f1:.8708,sep:11.10,prec:.9686,rec:.7909,spec:.9987},
        {traj:7000,f1:.8517,sep:7.39,prec:.9743,rec:.7566,spec:.9991},
        {traj:8000,f1:.9130,sep:8.11,prec:.9667,rec:.8650,spec:.9983},
        {traj:9000,f1:.9154,sep:7.76,prec:.9744,rec:.8632,spec:.9988},
        {traj:10000,f1:.9211,sep:7.10,prec:.9752,rec:.8726,spec:.9988},
        {traj:11000,f1:.9422,sep:8.84,prec:.9750,rec:.9116,spec:.9987},
        {traj:12000,f1:.9329,sep:6.00,prec:.9729,rec:.8960,spec:.9984}
      ]
    },
    quad3d: {
      baselines: [
        {name:'DeepReach',traj:25000,f1:.701,sep:42.8,prec:.949,rec:.556,spec:.996},
        {name:'Lyapunov NN',traj:25000,f1:.921,sep:32.1,prec:.994,rec:.858,spec:.999},
        {name:'MORALS',traj:25000,f1:.194,sep:81.8,prec:.1074,rec:1.0000,spec:.0000},
        {name:'Deterministic Final State Pred.',traj:25000,f1:.029,sep:1.0,prec:1.0000,rec:.0150,spec:N},
        {name:'Classification',traj:25000,f1:.763,sep:0.6,prec:.8134,rec:.786,spec:N}
      ],
      nonadaptive: [
        {traj:10000,f1:.9391,sep:42.89,prec:.9784,rec:.9027,spec:.9961},
        {traj:11000,f1:.9309,sep:31.65,prec:.9657,rec:.8985,spec:.9924},
        {traj:12000,f1:.9363,sep:30.64,prec:.9657,rec:.9086,spec:.9921},
        {traj:13000,f1:.9376,sep:29.85,prec:.9647,rec:.9120,spec:.9917},
        {traj:14000,f1:.9499,sep:33.37,prec:.9712,rec:.9296,spec:.9930},
        {traj:15000,f1:.9382,sep:28.28,prec:.9724,rec:.9063,spec:.9938},
        {traj:16000,f1:.9533,sep:34.05,prec:.9721,rec:.9352,spec:.9935},
        {traj:17000,f1:.9368,sep:25.99,prec:.9663,rec:.9090,spec:.9923},
        {traj:18000,f1:.9475,sep:32.38,prec:.9623,rec:.9331,spec:.9910},
        {traj:19000,f1:.9546,sep:29.73,prec:.9764,rec:.9337,spec:.9944},
        {traj:20000,f1:.9525,sep:29.15,prec:.9728,rec:.9330,spec:.9934},
        {traj:21000,f1:.9529,sep:28.43,prec:.9761,rec:.9309,spec:.9944},
        {traj:22000,f1:.9511,sep:27.43,prec:.9766,rec:.9269,spec:.9946},
        {traj:23000,f1:.9511,sep:26.75,prec:.9742,rec:.9292,spec:.9938},
        {traj:24000,f1:.9470,sep:25.31,prec:.9649,rec:.9297,spec:.9912},
        {traj:25000,f1:.9470,sep:25.31,prec:.9649,rec:.9297,spec:.9912}
      ],
      adaptive: [
        {traj:10000,f1:.9391,sep:42.89,prec:.9784,rec:.9027,spec:.9961},
        {traj:11000,f1:.9357,sep:30.94,prec:.9707,rec:.9032,spec:.9934},
        {traj:12000,f1:.9359,sep:31.79,prec:.9748,rec:.9000,spec:.9946},
        {traj:13000,f1:.9360,sep:27.36,prec:.9705,rec:.9038,spec:.9933},
        {traj:14000,f1:.9527,sep:31.88,prec:.9769,rec:.9296,spec:.9945},
        {traj:15000,f1:.9526,sep:30.94,prec:.9741,rec:.9321,spec:.9937},
        {traj:16000,f1:.9495,sep:29.21,prec:.9709,rec:.9290,spec:.9929},
        {traj:17000,f1:.9469,sep:27.93,prec:.9793,rec:.9166,spec:.9952},
        {traj:18000,f1:.9485,sep:27.61,prec:.9721,rec:.9261,spec:.9932},
        {traj:19000,f1:.9521,sep:27.42,prec:.9770,rec:.9285,spec:.9945},
        {traj:20000,f1:.9491,sep:25.81,prec:.9789,rec:.9211,spec:.9952},
        {traj:21000,f1:.9577,sep:29.41,prec:.9711,rec:.9447,spec:.9925},
        {traj:22000,f1:.9471,sep:23.92,prec:.9787,rec:.9175,spec:.9952},
        {traj:23000,f1:.9577,sep:27.32,prec:.9754,rec:.9406,spec:.9939},
        {traj:24000,f1:.9576,sep:27.44,prec:.9813,rec:.9350,spec:.9956},
        {traj:25000,f1:.9525,sep:25.22,prec:.9737,rec:.9322,spec:.9935}
      ]
    }
  };

  var NCOLS = 7;

  function findNearest(data, target) {
    var best = data[0], bestDist = Math.abs(data[0].traj - target);
    for (var i = 1; i < data.length; i++) {
      var dist = Math.abs(data[i].traj - target);
      if (dist < bestDist) { best = data[i]; bestDist = dist; }
    }
    return best;
  }

  function fmt3(val) {
    if (val === null) return '\u2014';
    return val.toFixed(3).slice(1);
  }

  function fmtSep(val) {
    if (val === 0) return '0%';
    return val.toFixed(1) + '%';
  }

  function updateSliderTrack(slider) {
    var pct = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.background = 'linear-gradient(to right, #3273dc ' + pct + '%, #ddd ' + pct + '%)';
  }

  function metricCells(d, isBestF1) {
    var c = '';
    c += '<td class="has-text-centered de-unc-col">' + fmtSep(d.sep) + '</td>';
    c += '<td class="has-text-centered de-metric-start">' + fmt3(d.prec) + '</td>';
    c += '<td class="has-text-centered">' + fmt3(d.rec) + '</td>';
    c += '<td class="has-text-centered">' + fmt3(d.spec) + '</td>';
    c += '<td class="has-text-centered">' + (isBestF1 ? '<b>' : '') + fmt3(d.f1) + (isBestF1 ? '</b>' : '') + '</td>';
    return c;
  }

  function renderPanel(key) {
    var sys = SYSTEMS[key];
    var slider = document.getElementById('slider-' + key);
    var label = document.getElementById('label-' + key);
    var tableDiv = document.getElementById('table-' + key);

    var traj = parseInt(slider.value);
    label.textContent = traj.toLocaleString() + ' trajectories';
    updateSliderTrack(slider);

    var na = findNearest(sys.nonadaptive, traj);
    var ad = findNearest(sys.adaptive, traj);

    var allF1 = sys.baselines.map(function(b) { return b.f1; }).concat([na.f1, ad.f1]);
    var bestF1 = Math.max.apply(null, allF1);

    var html = '<table class="de-table"><thead><tr>';
    html += '<th>Method</th><th class="de-traj-col">Traj.</th>';
    html += '<th class="has-text-centered de-unc-col">Unc% \u2193</th>';
    html += '<th class="has-text-centered de-metric-start">Prec. \u2191</th>';
    html += '<th class="has-text-centered">Recall \u2191</th>';
    html += '<th class="has-text-centered">Spec. \u2191</th>';
    html += '<th class="has-text-centered">F1 \u2191</th>';
    html += '</tr></thead><tbody>';

    for (var i = 0; i < sys.baselines.length; i++) {
      var b = sys.baselines[i];
      var isBest = Math.abs(b.f1 - bestF1) < 0.0005;
      html += '<tr class="de-baseline-row"><td>' + b.name + '</td>';
      html += '<td class="de-traj-col">' + b.traj.toLocaleString() + '</td>';
      html += metricCells(b, isBest) + '</tr>';
    }

    html += '<tr class="de-sep-row"><td colspan="' + NCOLS + '"></td></tr>';

    var naIsBest = Math.abs(na.f1 - bestF1) < 0.0005;
    html += '<tr class="de-ours-row"><td><b>Non-adaptive (Ours)</b></td>';
    html += '<td class="de-traj-col">' + na.traj.toLocaleString() + '</td>';
    html += metricCells(na, naIsBest) + '</tr>';

    var adIsBest = Math.abs(ad.f1 - bestF1) < 0.0005;
    html += '<tr class="de-ours-row de-ours-row-last"><td><b>Adaptive (Ours)</b></td>';
    html += '<td class="de-traj-col">' + ad.traj.toLocaleString() + '</td>';
    html += metricCells(ad, adIsBest) + '</tr>';

    html += '</tbody></table>';
    tableDiv.innerHTML = html;

    if (CHARTS[key]) {
      CHARTS[key].f1.options.plugins.sliderLine.value = traj;
      CHARTS[key].unc.options.plugins.sliderLine.value = traj;
      CHARTS[key].f1.update('none');
      CHARTS[key].unc.update('none');
    }
  }

  var BASELINE_STYLES = {
    DeepReach:         {color: '#7b2d8e', dash: [6, 4],          width: 2.5},
    'Lyapunov NN':     {color: '#d6277f', dash: [14, 5, 3, 5],  width: 2.5},
    MORALS:            {color: '#d45800', dash: [2, 3],           width: 2.5},
    Classification:    {color: '#1a8a4a', dash: [12, 6],         width: 2.5},
    'Deterministic Final State Pred.':  {color: '#555555', dash: [8, 3, 2, 3],   width: 2.5}
  };

  var CHARTS = {};

  var sliderLinePlugin = {
    id: 'sliderLine',
    afterDraw: function(chart) {
      var opts = chart.options.plugins.sliderLine;
      if (!opts || opts.value == null) return;
      var xScale = chart.scales.x;
      var yScale = chart.scales.y;
      var px = xScale.getPixelForValue(opts.value);
      if (px < xScale.left || px > xScale.right) return;
      var ctx = chart.ctx;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(px, yScale.top);
      ctx.lineTo(px, yScale.bottom);
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(50, 115, 220, 0.4)';
      ctx.setLineDash([6, 4]);
      ctx.stroke();
      ctx.restore();
    }
  };

  function makeDatasets(sys, metric) {
    var datasets = [];
    var minT = sys.nonadaptive[0].traj;
    var maxT = Math.max(
      sys.nonadaptive[sys.nonadaptive.length - 1].traj,
      sys.adaptive[sys.adaptive.length - 1].traj
    );

    datasets.push({
      label: 'Adaptive (Ours)',
      data: sys.adaptive.map(function(d) { return {x: d.traj, y: metric === 'f1' ? d.f1 : d.sep}; }),
      borderColor: '#2171b5',
      backgroundColor: '#2171b5',
      borderWidth: 2.5,
      pointRadius: 3.5,
      pointStyle: 'circle',
      tension: 0
    });

    datasets.push({
      label: 'Non-adaptive (Ours)',
      data: sys.nonadaptive.map(function(d) { return {x: d.traj, y: metric === 'f1' ? d.f1 : d.sep}; }),
      borderColor: '#cb181d',
      backgroundColor: '#cb181d',
      borderWidth: 2.5,
      pointRadius: 3.5,
      pointStyle: 'rect',
      tension: 0
    });

    var plotBaselines = ['DeepReach', 'Lyapunov NN', 'MORALS', 'Classification', 'Deterministic Final State Pred.'];

    for (var i = 0; i < sys.baselines.length; i++) {
      var b = sys.baselines[i];
      if (plotBaselines.indexOf(b.name) === -1) continue;
      var s = BASELINE_STYLES[b.name];
      var val = metric === 'f1' ? b.f1 : b.sep;
      datasets.push({
        label: b.name,
        data: [{x: minT, y: val}, {x: maxT, y: val}],
        borderColor: s.color,
        backgroundColor: s.color,
        borderWidth: s.width,
        pointRadius: 0,
        borderDash: s.dash,
        tension: 0
      });
    }

    return datasets;
  }

  function buildLegend() {
    var items = [
      {label: 'Adaptive (Ours)', color: '#2171b5', dash: '', marker: 'circle'},
      {label: 'Non-adaptive (Ours)', color: '#cb181d', dash: '', marker: 'rect'},
      {label: 'DeepReach', color: '#7b2d8e', dash: '6,4'},
      {label: 'Classification', color: '#1a8a4a', dash: '12,6'},
      {label: 'MORALS', color: '#d45800', dash: '2,3'},
      {label: 'Lyapunov NN', color: '#d6277f', dash: '14,5,3,5'},
      {label: 'Deterministic Final State Pred.', color: '#555555', dash: '8,3,2,3'}
    ];
    var html = '';
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      var svg = '<svg width="24" height="12" style="vertical-align:middle;">';
      svg += '<line x1="0" y1="6" x2="24" y2="6" stroke="' + it.color + '" stroke-width="2.5"';
      if (it.dash) svg += ' stroke-dasharray="' + it.dash + '"';
      svg += '/>';
      if (it.marker === 'circle') svg += '<circle cx="12" cy="6" r="3" fill="' + it.color + '"/>';
      if (it.marker === 'rect') svg += '<rect x="9" y="3" width="6" height="6" fill="' + it.color + '"/>';
      svg += '</svg>';
      html += '<div style="display:flex;align-items:center;gap:4px;white-space:nowrap;">' + svg + '<span>' + it.label + '</span></div>';
    }
    return html;
  }

  function createSystemCharts(key) {
    var sys = SYSTEMS[key];
    var panel = document.getElementById('table-' + key).parentNode;
    var minT = sys.nonadaptive[0].traj;

    var container = document.createElement('div');
    container.style.cssText = 'margin-top:2rem;';

    var plotRow = document.createElement('div');
    plotRow.style.cssText = 'display:flex; gap:0.5rem;';

    var wrapF1 = document.createElement('div');
    wrapF1.style.cssText = 'flex:1; min-width:0;';
    var cF1 = document.createElement('canvas');
    wrapF1.appendChild(cF1);

    var wrapUnc = document.createElement('div');
    wrapUnc.style.cssText = 'flex:1; min-width:0;';
    var cUnc = document.createElement('canvas');
    wrapUnc.appendChild(cUnc);

    plotRow.appendChild(wrapF1);
    plotRow.appendChild(wrapUnc);

    var wrapLeg = document.createElement('div');
    wrapLeg.style.cssText = 'display:flex; flex-wrap:wrap; justify-content:center; gap:4px 1.5rem; font-size:1.05rem; margin-top:0.4rem;';
    wrapLeg.innerHTML = buildLegend();

    container.appendChild(plotRow);
    container.appendChild(wrapLeg);
    panel.appendChild(container);

    function chartOpts(yLabel) {
      return {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.4,
        animation: false,
        plugins: {
          legend: {display: false},
          tooltip: {mode: 'nearest', intersect: false},
          sliderLine: {value: null}
        },
        scales: {
          x: {
            type: 'linear',
            min: minT,
            title: {display: true, text: 'Trajectories', font: {size: 16, weight: 'bold'}},
            grid: {color: 'rgba(0,0,0,0.06)'},
            ticks: {
              font: {size: 15},
              maxTicksLimit: 6,
              callback: function(v) { return v >= 1000 ? (v / 1000) + 'k' : v; }
            }
          },
          y: {
            title: {display: true, text: yLabel, font: {size: 16, weight: 'bold'}},
            grid: {color: 'rgba(0,0,0,0.06)'},
            ticks: {font: {size: 15}, maxTicksLimit: 6},
            beginAtZero: yLabel !== 'F1 Score'
          }
        }
      };
    }

    var f1Chart = new Chart(cF1, {
      type: 'line',
      data: {datasets: makeDatasets(sys, 'f1')},
      options: chartOpts('F1 Score'),
      plugins: [sliderLinePlugin]
    });

    var uncChart = new Chart(cUnc, {
      type: 'line',
      data: {datasets: makeDatasets(sys, 'sep')},
      options: chartOpts('Unc. (%)'),
      plugins: [sliderLinePlugin]
    });

    CHARTS[key] = {f1: f1Chart, unc: uncChart};
  }

  document.addEventListener('DOMContentLoaded', function() {
    var keys = Object.keys(SYSTEMS);
    for (var k = 0; k < keys.length; k++) {
      (function(key) {
        var slider = document.getElementById('slider-' + key);
        slider.addEventListener('input', function() { renderPanel(key); });
        createSystemCharts(key);
        renderPanel(key);
      })(keys[k]);
    }
  });
})();
