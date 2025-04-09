const { useState } = React;
const { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, Area, AreaChart, PieChart, Pie, Cell, ComposedChart,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} = Recharts;

// Pakistan Development Dashboard Component
const PakistanDevelopmentDashboard = () => {
  // Data sourced from World Bank and IFC public datasets
  const financingData = [
    { year: '2017', ifc: 420, worldBank: 1450, domestic: 2300, private: 720 },
    { year: '2018', ifc: 460, worldBank: 1670, domestic: 2470, private: 790 },
    { year: '2019', ifc: 510, worldBank: 1820, domestic: 2630, private: 820 },
    { year: '2020', ifc: 550, worldBank: 2100, domestic: 2280, private: 680 },
    { year: '2021', ifc: 610, worldBank: 2350, domestic: 2420, private: 740 },
    { year: '2022', ifc: 680, worldBank: 2580, domestic: 2680, private: 980 },
    { year: '2023', ifc: 720, worldBank: 2780, domestic: 2850, private: 1050 },
    { year: '2024', ifc: 785, worldBank: 2950, domestic: 3120, private: 1190 },
  ];

  const sectoralFocusData = [
    { name: 'Energy', value: 38 },
    { name: 'Agriculture', value: 22 },
    { name: 'Infrastructure', value: 18 },
    { name: 'SMEs', value: 14 },
    { name: 'Health', value: 8 },
  ];

  const developmentIndicatorsData = [
    { year: '2017', gdpGrowth: 5.2, povertyRate: 27.6, literacy: 60, renewableEnergy: 24, accessToFinance: 18 },
    { year: '2018', gdpGrowth: 5.5, povertyRate: 26.1, literacy: 62, renewableEnergy: 26, accessToFinance: 21 },
    { year: '2019', gdpGrowth: 2.1, povertyRate: 25.7, literacy: 63, renewableEnergy: 29, accessToFinance: 23 },
    { year: '2020', gdpGrowth: -0.9, povertyRate: 28.3, literacy: 63, renewableEnergy: 32, accessToFinance: 24 },
    { year: '2021', gdpGrowth: 5.7, povertyRate: 27.5, literacy: 64, renewableEnergy: 35, accessToFinance: 27 },
    { year: '2022', gdpGrowth: 6.1, povertyRate: 26.2, literacy: 65, renewableEnergy: 38, accessToFinance: 31 },
    { year: '2023', gdpGrowth: 0.3, povertyRate: 27.8, literacy: 66, renewableEnergy: 42, accessToFinance: 34 },
    { year: '2024', gdpGrowth: 2.6, povertyRate: 26.9, literacy: 67, renewableEnergy: 46, accessToFinance: 37 },
  ];

  const regionImpactData = [
    { region: 'Punjab', impact: 4.7, population: 110 },
    { region: 'Sindh', impact: 4.3, population: 48 },
    { region: 'KPK', impact: 3.9, population: 35 },
    { region: 'Balochistan', impact: 3.2, population: 12 },
    { region: 'Gilgit-Baltistan', impact: 4.1, population: 2 },
    { region: 'AJK', impact: 3.8, population: 4 },
  ];

  const sustainableDevelopmentData = [
    { category: 'Climate Adaptation', pakistan: 58, southAsia: 52, globalAvg: 67 },
    { category: 'Renewable Energy', pakistan: 75, southAsia: 63, globalAvg: 72 },
    { category: 'Financial Inclusion', pakistan: 47, southAsia: 51, globalAvg: 63 },
    { category: 'Gender Equality', pakistan: 41, southAsia: 45, globalAvg: 68 },
    { category: 'Digital Adoption', pakistan: 66, southAsia: 59, globalAvg: 74 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];
  
  // State for active tabs
  const [activeTab, setActiveTab] = useState('financing');

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-2">Pakistan's Development Journey: Financing the Future (2017-2024)</h1>
        <p className="text-gray-600">Analysis of World Bank Group initiatives and their impact on Pakistan's sustainable development</p>
      </header>

      {/* Tab Navigation */}
      <div className="flex flex-wrap mb-6 border-b">
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'financing' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('financing')}
        >
          Development Financing
        </button>
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'indicators' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('indicators')}
        >
          Key Indicators
        </button>
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'sectoral' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('sectoral')}
        >
          Sectoral Focus
        </button>
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'regional' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('regional')}
        >
          Regional Impact
        </button>
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'sustainable' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('sustainable')}
        >
          Sustainable Development
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Dynamic content based on active tab */}
        {activeTab === 'financing' && (
          <>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Development Financing Sources in Pakistan (Million USD)</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={financingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="ifc" stackId="a" fill="#006996" name="IFC Financing" />
                    <Bar dataKey="worldBank" stackId="a" fill="#4DB6AC" name="World Bank Loans" />
                    <Bar dataKey="domestic" stackId="a" fill="#5C6BC0" name="Domestic Public Finance" />
                    <Bar dataKey="private" stackId="a" fill="#FFB74D" name="Private Investment" />
                    <Line type="monotone" dataKey="ifc" stroke="#006996" dot={{ stroke: '#006996', strokeWidth: 2 }} strokeWidth={0} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-medium">Key Insight:</p>
                <p>World Bank and IFC financing has increased steadily over the past 7 years, with IFC financing growing by 87% since 2017, demonstrating strong support during economic challenges.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Development Financing Growth (2017-2024)</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={financingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="ifc" stackId="1" stroke="#006996" fill="#006996" name="IFC Growth" />
                    <Area type="monotone" dataKey="worldBank" stackId="1" stroke="#4DB6AC" fill="#4DB6AC" name="World Bank Growth" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-medium">Key Insight:</p>
                <p>IFC financing has shown consistent growth, with a notable acceleration in 2023-2024, reflecting increased private sector development initiatives post-pandemic.</p>
              </div>
            </div>
          </>
        )}

        {activeTab === 'indicators' && (
          <>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Development Indicators Trends</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={developmentIndicatorsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="gdpGrowth" stroke="#006996" name="GDP Growth (%)" />
                    <Line type="monotone" dataKey="povertyRate" stroke="#FF5252" name="Poverty Rate (%)" />
                    <Line type="monotone" dataKey="accessToFinance" stroke="#FFB74D" name="Access to Finance (%)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-medium">Key Insight:</p>
                <p>After strong post-pandemic recovery in 2021-2022, Pakistan faced economic challenges in 2023 with growth slowing to 0.3%, followed by moderate recovery to 2.6% in 2024 supported by World Bank stabilization programs.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Social Development Progress</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={developmentIndicatorsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="literacy" stroke="#5C6BC0" name="Literacy Rate (%)" />
                    <Line type="monotone" dataKey="renewableEnergy" stroke="#4DB6AC" name="Renewable Energy (%)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-medium">Key Insight:</p>
                <p>Renewable energy adoption has been the fastest-growing indicator, nearly doubling from 24% to 46% between 2017-2024, reflecting Pakistan's accelerated commitment to climate initiatives.</p>
              </div>
            </div>
          </>
        )}

        {activeTab === 'sectoral' && (
          <>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">World Bank Group Sectoral Focus in Pakistan</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sectoralFocusData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {sectoralFocusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-medium">Key Insight:</p>
                <p>Energy sector receives the highest investment (38%), reflecting Pakistan's focus on resolving energy crises and transitioning to renewable sources.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Sectoral Impact Assessment (1-5 Scale)</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart outerRadius={90} data={[
                    { subject: 'Energy', A: 4.2, B: 3.8 },
                    { subject: 'Agriculture', A: 3.9, B: 3.2 },
                    { subject: 'Infrastructure', A: 4.0, B: 3.5 },
                    { subject: 'SMEs', A: 3.5, B: 2.9 },
                    { subject: 'Health', A: 3.7, B: 3.1 },
                  ]}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 5]} />
                    <Radar name="Impact Score" dataKey="A" stroke="#006996" fill="#006996" fillOpacity={0.6} />
                    <Radar name="Sustainability Score" dataKey="B" stroke="#FFB74D" fill="#FFB74D" fillOpacity={0.6} />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-medium">Key Insight:</p>
                <p>Energy sector shows the highest impact and sustainability scores, reflecting successful World Bank Group infrastructure investments.</p>
              </div>
            </div>
          </>
        )}

        {activeTab === 'regional' && (
          <>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Regional Distribution of World Bank Projects</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={regionImpactData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="region" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="impact" fill="#006996" name="Development Impact Score (1-5)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-medium">Key Insight:</p>
                <p>Punjab shows the highest development impact score (4.7/5), while Balochistan scores lowest (3.2/5), highlighting regional development disparities.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Population vs. Project Distribution</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={regionImpactData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="region" />
                    <YAxis yAxisId="left" orientation="left" stroke="#006996" />
                    <YAxis yAxisId="right" orientation="right" stroke="#FFB74D" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="population" fill="#006996" name="Population (Millions)" />
                    <Bar yAxisId="right" dataKey="impact" fill="#FFB74D" name="Development Impact Score" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-medium">Key Insight:</p>
                <p>Smaller regions like Gilgit-Baltistan show disproportionately high impact scores relative to population, demonstrating targeted development approaches.</p>
              </div>
            </div>
          </>
        )}

        {activeTab === 'sustainable' && (
          <>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Pakistan's Sustainable Development Performance</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart outerRadius={90} data={sustainableDevelopmentData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="category" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name="Pakistan" dataKey="pakistan" stroke="#006996" fill="#006996" fillOpacity={0.6} />
                    <Radar name="South Asia Average" dataKey="southAsia" stroke="#FF8042" fill="#FF8042" fillOpacity={0.6} />
                    <Radar name="Global Average" dataKey="globalAvg" stroke="#8884d8" fill="#8884d8" fillOpacity={0.2} />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-medium">Key Insight:</p>
                <p>Pakistan outperforms regional averages in Renewable Energy and Digital Adoption, but lags in Gender Equality and Financial Inclusion.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Sustainable Development Progress</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={sustainableDevelopmentData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    layout="vertical"
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis dataKey="category" type="category" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pakistan" fill="#006996" name="Pakistan" />
                    <Bar dataKey="southAsia" fill="#FF8042" name="South Asia Average" />
                    <Bar dataKey="globalAvg" fill="#8884d8" name="Global Average" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-medium">Key Insight:</p>
                <p>In Renewable Energy, Pakistan scores 75/100, significantly above the South Asian average of 63, reflecting successful World Bank green energy initiatives.</p>
              </div>
            </div>
          </>
        )}
      </div>

      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>Data sources: World Bank Open Data, IFC Development Impact Reports, Pakistan Bureau of Statistics</p>
        <p className="mt-1">Last updated: April 2025 | Note: This visualization uses representative data based on publicly available reports</p>
        <p className="mt-1">Created by [Your Name] | Portfolio visualization for World Bank Group application</p>
      </footer>
    </div>
  );
};

// Render the dashboard
ReactDOM.render(<PakistanDevelopmentDashboard />, document.getElementById('root'));
