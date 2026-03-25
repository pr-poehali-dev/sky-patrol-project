"""Отправка заявки от кандидата на почту nadatsioma11@gmail.com"""
import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "")
    phone = body.get("phone", "")
    vacancy = body.get("vacancy", "")
    category = body.get("category", "")
    comment = body.get("comment", "")

    smtp_password = os.environ.get("SMTP_PASSWORD", "")
    sender = "nadatsioma11@gmail.com"
    recipient = "nadatsioma11@gmail.com"

    subject = f"Новая заявка: {vacancy} — {name}"

    html_body = f"""
    <h2>Новая заявка с сайта «Набережная добра»</h2>
    <table style="border-collapse:collapse;width:100%">
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Имя</td><td style="padding:8px;border:1px solid #ddd">{name}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Телефон</td><td style="padding:8px;border:1px solid #ddd">{phone}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Вакансия</td><td style="padding:8px;border:1px solid #ddd">{vacancy}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Категория</td><td style="padding:8px;border:1px solid #ddd">{category or '—'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Комментарий</td><td style="padding:8px;border:1px solid #ddd">{comment or '—'}</td></tr>
    </table>
    """

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = sender
    msg["To"] = recipient
    msg.attach(MIMEText(html_body, "html", "utf-8"))

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(sender, smtp_password)
        server.sendmail(sender, recipient, msg.as_string())

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"ok": True}),
    }
