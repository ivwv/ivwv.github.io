<script>
export default {
  data() {
    return {
      apiServer: "https://count-blog-view.onrender.com",
      ipinfo: {},
      clientInfo: {
        href: "",
        host: "",
        pathname: "",
        time: "",
      },
    };
  },
  methods: {
    countViews() {
      fetch("https://ipinfo.io/?token=e73fecae5b3e0b")
        .then((res) => res.json())
        .then((res) => {
          // console.log(res);
          this.ipinfo = res;
          this.clientInfo = {
            href: decodeURI(window.location.href),
            host: decodeURI(window.location.host),
            pathname: decodeURI(window.location.pathname),
            time: new Date().toLocaleString(),
          };
          fetch(this.apiServer + "/get_client_info", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              allClientInfo: Object.assign(this.ipinfo, this.clientInfo),
            }),
          });
        })
        .catch((err) => console.log(err));
    },
  },
  created() {
    this.countViews();
  },
};
</script>
