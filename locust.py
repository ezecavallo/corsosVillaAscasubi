from locust import HttpUser, task


class QuickstartUser(HttpUser):

    @task
    def hello_world(self):
        self.client.get("/")

    def on_start(self):
        self.client.get("/")
