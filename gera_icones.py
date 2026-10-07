#!/usr/bin/env python3
"""Ícones do CirurgiaMed: bisturi no azul da marca (#33479E) sobre papel claro.
   Gera icons/icon-180.png, icon-192.png, icon-512.png e icon-maskable-512.png.
   Quadrado cheio, sem canto transparente (o macOS emoldura ícone 'any' com transparência)."""
from PIL import Image, ImageDraw

AZUL = (51, 71, 158, 255)
PAPEL = (250, 250, 248, 255)

def icone(tam, maskable=False):
    S = 4 * tam                                  # desenha grande e reduz (antisserrilhado)
    im = Image.new("RGBA", (S, S), PAPEL)
    d = ImageDraw.Draw(im)
    esc = (0.56 if maskable else 0.80) * S / 24  # o desenho mora numa grade de 24
    off = (S - 24 * esc) / 2
    P = lambda x, y: (off + x * esc, off + y * esc)
    # cabo
    d.line([P(13.6, 10.4), P(20.6, 3.4)], fill=AZUL, width=round(2.6 * esc))
    for c in (P(13.6, 10.4), P(20.6, 3.4)):
        r = 1.3 * esc; d.ellipse([c[0]-r, c[1]-r, c[0]+r, c[1]+r], fill=AZUL)
    # lâmina (curva aproximada por pontos)
    pts = [P(3, 21), P(11.4, 11.6), P(14.4, 14.6)]
    for t in [i / 12 for i in range(1, 12)]:     # curva de (14.4,14.6) a (3,21)
        x = (1-t)**3*14.4 + 3*(1-t)**2*t*11.6 + 3*(1-t)*t**2*7.6 + t**3*3
        y = (1-t)**3*14.6 + 3*(1-t)**2*t*18 + 3*(1-t)*t**2*20.4 + t**3*21
        pts.append(P(x, y))
    d.polygon(pts, fill=AZUL)
    return im.resize((tam, tam), Image.LANCZOS).convert("RGB")

for tam in (180, 192, 512):
    icone(tam).save(f"icons/icon-{tam}.png")
icone(512, maskable=True).save("icons/icon-maskable-512.png")
print("ícones gerados")
