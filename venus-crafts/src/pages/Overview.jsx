const Overview = () => {

  const [stats, setStats] = useState({});

  useEffect(() => {
    getStats().then((res) => setStats(res.data));
  }, []);

  return (
    <>
      <StatCard title="Users" value={stats.users} />
      <StatCard title="Products" value={stats.products} />
      <StatCard title="Orders" value={stats.orders} />
      <StatCard title="Revenue" value={`₹${stats.revenue}`} />
    </>
  );
};